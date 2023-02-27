import path from "path";
import fs from "fs";
import {
  Stack,
  StackProps,
  Duration,
  aws_s3 as s3,
  aws_route53 as route53,
  aws_route53_targets as route53targets,
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as origins,
  aws_certificatemanager as acm,
  aws_s3_deployment as s3deploy,
  aws_lambda as lambda,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import WebsiteRedirect from "./WebsiteRedirect";

const ZONE_NAME = "mattb.tech";
const DOMAIN_NAME = "mattb.tech";
const HOSTED_ZONE_ID = "Z2GPSB1CDK86DH";

const REDIRECT_DOMAIN_NAMES = [
  {
    hostedZone: "mattb.tech",
    hostedZoneId: "Z2GPSB1CDK86DH",
    domainName: "www.mattb.tech",
    alternateNames: [],
  },
];

const OUT_PATH = path.join(__dirname, "../../website/out");

const CACHE_FOREVER = s3deploy.CacheControl.fromString(
  "max-age=31536000,public,immutable"
);
const DONT_CACHE = s3deploy.CacheControl.fromString(
  "max-age=0,no-cache,no-store,must-revalidate"
);

export class MattbTechWebsite extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hostedZone = route53.HostedZone.fromHostedZoneAttributes(
      this,
      "HostedZone",
      {
        hostedZoneId: HOSTED_ZONE_ID,
        zoneName: ZONE_NAME,
      }
    );

    const pagesBucket = new s3.Bucket(this, "PagesBucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
    });

    const assetsBucket = new s3.Bucket(this, "AssetsBucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
    });

    const pdfBucket = new s3.Bucket(this, "PdfBucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
    });

    const certificate = new acm.DnsValidatedCertificate(this, "Certificate", {
      domainName: DOMAIN_NAME,
      hostedZone: hostedZone,
    });

    const routerLambda = new lambda.Function(this, "RouterFunction", {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(
        fs.readFileSync(path.join(__dirname, "./edge-router.js")).toString()
      ),
    });

    const distribution = new cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new origins.S3Origin(pagesBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        edgeLambdas: [
          {
            functionVersion: routerLambda.currentVersion,
            eventType: cloudfront.LambdaEdgeEventType.ORIGIN_REQUEST,
          },
        ],
      },
      domainNames: [DOMAIN_NAME],
      certificate,
    });
    distribution.addBehavior("_next/*", new origins.S3Origin(assetsBucket));
    distribution.addBehavior("cv.pdf", new origins.S3Origin(pdfBucket));

    new s3deploy.BucketDeployment(this, "DeployPages", {
      sources: [
        s3deploy.Source.asset(OUT_PATH, {
          exclude: ["_next"],
        }),
      ],
      destinationBucket: pagesBucket,
      cacheControl: [DONT_CACHE],
      distribution,
    });

    new s3deploy.BucketDeployment(this, "DeployAssets", {
      sources: [
        s3deploy.Source.asset(OUT_PATH, {
          exclude: ["*.html"],
        }),
      ],
      destinationBucket: assetsBucket,
      cacheControl: [CACHE_FOREVER],
      distribution,
      prune: false,
    });

    new s3deploy.BucketDeployment(this, "DeployPdf", {
      sources: [
        s3deploy.Source.asset(path.join(__dirname, "../../pdf-cv"), {
          exclude: ["**", "!cv.pdf"],
        }),
      ],
      destinationBucket: pdfBucket,
      cacheControl: [DONT_CACHE],
      distribution,
    });

    new route53.ARecord(this, "DomainRecord", {
      zone: hostedZone,
      recordName: DOMAIN_NAME,
      ttl: Duration.minutes(5),
      target: route53.RecordTarget.fromAlias(
        new route53targets.CloudFrontTarget(distribution)
      ),
    });

    REDIRECT_DOMAIN_NAMES.forEach(
      ({ hostedZone, hostedZoneId, domainName, alternateNames }) => {
        new WebsiteRedirect(this, `RedirectFor${domainName}`, {
          redirectTo: DOMAIN_NAME,
          domainName: domainName,
          alternateNames: alternateNames,
          hostedZone: route53.HostedZone.fromHostedZoneAttributes(
            this,
            `HostedZone${hostedZone}`,
            {
              hostedZoneId,
              zoneName: hostedZone,
            }
          ),
        });
      }
    );
  }
}
