import React from "react";
import { Award, Book, Briefcase, Download } from "react-feather";
import ContentBox, {
  Content,
  ContentBoxHeading,
} from "../components/ContentBox";
import DetailPill from "../components/DetailPill";
import { ExternalLink } from "../components/ExternalLink";
import Icon from "../components/Icon";
import List, { Item } from "../components/List";
import { Section, SectionHeading } from "../components/Section";

export default function CV() {
  return (
    <main>
      <ContentBox float="left">
        <Content important>
          Senior developer and tech-lead with 10 years experience at Amazon
          behind me.
        </Content>
        <Content important>
          During that time I worked in many different areas of the business, and
          across the tech stack.
        </Content>
        <Content className="print:hidden">
          <Icon inline component={Download} />
          <ExternalLink href="/cv.pdf">Download PDF Version</ExternalLink>
        </Content>
      </ContentBox>
      <ContentBox float="right" border>
        <ContentBoxHeading>
          <Icon inline component={Briefcase} size="lg" />
          Work: Amazon/IMDb
        </ContentBoxHeading>
        <Section>
          <SectionHeading inline>
            Publishing&nbsp;Team – Sr.&nbsp;SDE
          </SectionHeading>
          <DetailPill>2019-2021</DetailPill>
          <DetailPill>Bristol, UK</DetailPill>
          <Content>
            Tech lead on a team working on how IMDb data is made available to
            both internal and external customers.
          </Content>
          <List>
            <Item>
              Led the way on migrating the whole of IMDb to a federated GraphQL
              architecture, with more than ten services, across many teams,
              federated within the first six months.
              <DetailPill>Typescript</DetailPill>
              <DetailPill>Node</DetailPill>
              <DetailPill>Serverless</DetailPill>
              <DetailPill>Lambda</DetailPill>
              <DetailPill>DynamoDB</DetailPill>
            </Item>
            <Item>
              Launched new data products for external customers, key to the
              growth of this area of IMDb's business.
              <DetailPill>Documentation</DetailPill>
              <DetailPill>AWS</DetailPill>
              <DetailPill>S3</DetailPill>
              <DetailPill>SNS / SQS</DetailPill>
            </Item>
          </List>
        </Section>
        <Section>
          <SectionHeading inline>
            Website&nbsp;Team – Sr.&nbsp;SDE
          </SectionHeading>
          <DetailPill>2016-2019</DetailPill>
          <DetailPill>Seattle, WA</DetailPill>
          <Content>
            Tech lead on the team running IMDb's high scale website
          </Content>
          <List>
            <Item>
              Load testing and scaling ahead of high traffic events such as the
              Oscars.
              <DetailPill>Scaling</DetailPill>
            </Item>
            <Item>
              Started a pattern library such that a new design could be rolled
              out consistently across hundreds of pages.
              <DetailPill>React</DetailPill>
              <DetailPill>Sass</DetailPill>
            </Item>
            <Item>
              Designed an approach to breaking down IMDb's monolithic website
              application into a suite of applications owned by vertical program
              teams.
              <DetailPill>Java</DetailPill>
              <DetailPill>Microservices</DetailPill>
            </Item>
          </List>
        </Section>
        <Section>
          <SectionHeading inline>Content&nbsp;Team – SDE</SectionHeading>
          <DetailPill>2011-2016</DetailPill>
          <DetailPill>Bristol and Seattle</DetailPill>
          <Content>
            Working on how data is contributed to IMDb, and how it is vetted for
            accuracy.
          </Content>
          <List>
            <Item>
              Tech lead on a project to enable customers to upload images to
              IMDb for the first time, resulting in millions of images being
              uploaded, and significantly improving the percentage of pages with
              an associated image.
              <DetailPill>Service-oriented-architecture</DetailPill>
              <DetailPill>React</DetailPill>
              <DetailPill>Java</DetailPill>
            </Item>
            <Item>
              Owned the process of creating company-wide Java and Javascript
              coding standards, writing significant portions of the documents as
              well as gathering input from others and resolving disagreements.
              <DetailPill>Java</DetailPill>
              <DetailPill>Javascript</DetailPill>
            </Item>
            <Item>
              Designed and created a system for running consistency checks
              against the IMDb database that enabled us to guarantee that we had
              no data contradicting complex custom rules that we defined.
              <DetailPill>PostgreSQL</DetailPill>
              <DetailPill>Perl</DetailPill>
            </Item>
          </List>
        </Section>
        <Section>
          <SectionHeading>General</SectionHeading>
          <Content>
            Qualified Amazon{" "}
            <ExternalLink href="https://blog.aboutamazon.co.uk/working-at-amazon/what-is-a-bar-raiser-at-amazon">
              "Bar Raiser"
            </ExternalLink>
            , meaning I was responsible for ensuring a high quality interview
            process and facilitating the final decision. Performed over 300
            interviews for Amazon across many organizations and job roles, both
            technical and non-technical.
          </Content>
          <Content>
            Promoted twice from SDE I (junior-engineer-straight-out-of-uni) to
            SDE III (Sr Engineer / Team Technical Leader).
          </Content>
          <Content>
            Deeply involved in the career development of the engineers I worked
            with, giving feedback, and shepherding promotions through Amazon's
            tech promotions process.
          </Content>
        </Section>
      </ContentBox>
      <ContentBox float="left" border>
        <ContentBoxHeading>
          <Icon inline color="end" size="lg" component={Book} />
          Tech Skills
        </ContentBoxHeading>
        <Section>
          <SectionHeading>Front-end</SectionHeading>
          <Content>
            Worked with foundational web technologies, modern technologies and
            frameworks.
          </Content>
          <Content>
            <DetailPill>HTML</DetailPill>
            <DetailPill>CSS</DetailPill>
            <DetailPill>Javascript</DetailPill>
          </Content>
          <Content>
            <DetailPill>React</DetailPill>
            <DetailPill>Typescript</DetailPill>
            <DetailPill>Sass</DetailPill>
            <DetailPill>Webpack</DetailPill>
            <DetailPill>Tailwind CSS</DetailPill>
            <DetailPill>Next.js</DetailPill>
          </Content>
        </Section>
        <Section>
          <SectionHeading>Back-end</SectionHeading>
          <Content>
            Built many services, working mostly in AWS with
            infrastructure-as-code.
          </Content>
          <Content>
            <DetailPill>Service-oriented-architecture</DetailPill>
            <DetailPill>Serverless</DetailPill>
          </Content>
          <Content>
            <DetailPill>Node</DetailPill>
            <DetailPill>Java</DetailPill>
          </Content>
          <Content>
            <DetailPill>AWS</DetailPill>
            <DetailPill>CDK / Cloudformation</DetailPill>
            <DetailPill>Lambda</DetailPill>
            <DetailPill>GraphQL</DetailPill>
            <DetailPill>Rest</DetailPill>
            <DetailPill>DynamoDB</DetailPill>
            <DetailPill>PostgreSQL</DetailPill>
          </Content>
        </Section>
        <Section>
          <SectionHeading>Other</SectionHeading>
          <Content>
            <DetailPill>Git</DetailPill>
            <DetailPill>Test-driven-development</DetailPill>
            <DetailPill>Bash</DetailPill>
            <DetailPill>Linux</DetailPill>
            <DetailPill>Agile</DetailPill>
            <DetailPill>Continuous Deployment</DetailPill>
          </Content>
        </Section>
      </ContentBox>
      <ContentBox float="left" border className="text-lg">
        <ContentBoxHeading>
          <Icon inline size="lg" color="end" component={Award} />
          Education
        </ContentBoxHeading>
        <Section>
          <SectionHeading inline>
            MEng Computer Science 1st class from University of Bristol
          </SectionHeading>
          <DetailPill>2007-2011</DetailPill>
          <List>
            <Item>
              Scholarships for academic achievement from UBS Bank and Mysis
              Foundation.
            </Item>
            <Item>
              Netcraft award for best Computer Scientist in the second year.
            </Item>
            <Item>
              Won EPSRC summer bursary to develop work on “Vision based
              exploration for wheeled robots” (2009).
            </Item>
          </List>
        </Section>
        <Section>
          <SectionHeading inline>Bog-standard UK education</SectionHeading>
          <DetailPill>Childhood onwards</DetailPill>
          <Content>GCSEs, A Levels, etc.</Content>
        </Section>
      </ContentBox>
    </main>
  );
}
