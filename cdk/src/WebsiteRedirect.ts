import {
  aws_s3 as s3,
  aws_cloudfront as cloudfront,
  aws_route53 as route53,
  aws_route53_targets as targets,
  aws_certificatemanager as acm,
  Duration,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export interface WebsiteRedirectProps {
  redirectTo: string;
  hostedZone: route53.IHostedZone;
  domainName: string;
  alternateNames: string[];
}

export default class WebsiteRedirect extends Construct {
  constructor(
    scope: Construct,
    id: string,
    { redirectTo, hostedZone, domainName, alternateNames }: WebsiteRedirectProps
  ) {
    super(scope, id);

    const redirectBucket = new s3.Bucket(this, "RedirectBucket", {
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
      websiteRedirect: {
        hostName: redirectTo,
        protocol: s3.RedirectProtocol.HTTPS,
      },
    });

    const certificate = new acm.DnsValidatedCertificate(this, "Certificate", {
      domainName,
      subjectAlternativeNames: alternateNames,
      hostedZone,
    });

    const redirectDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "RedirectDistribution",
      {
        originConfigs: [
          {
            behaviors: [
              {
                isDefaultBehavior: true,
                defaultTtl: Duration.minutes(5),
                compress: true,
                allowedMethods: cloudfront.CloudFrontAllowedMethods.GET_HEAD,
                forwardedValues: {
                  queryString: false,
                },
              },
            ],
            customOriginSource: {
              domainName: redirectBucket.bucketWebsiteDomainName,
              originProtocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY,
            },
          },
        ],
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          certificate,
          {
            aliases: [domainName, ...alternateNames],
          }
        ),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      }
    );

    [domainName, ...alternateNames].forEach((domain, i) => {
      new route53.ARecord(this, `ARecord${i}`, {
        zone: hostedZone,
        recordName: domain,
        ttl: Duration.minutes(5),
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(redirectDistribution)
        ),
      });
    });
  }
}
