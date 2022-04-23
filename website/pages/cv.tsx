import React from "react";
import { Award, Book, Briefcase, Download } from "react-feather";
import Candide from "../components/Candide";
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
        <Content className="text-lg">
          Senior developer and tech-lead with 10 years experience at Amazon
          behind me.
        </Content>
        <Content className="text-lg">
          During that time I worked in many different areas of the business,
          with a bias towards product-focused full-stack engineering.
        </Content>
        <Content className="print:hidden">
          <Icon inline component={Download} />
          <ExternalLink href="/cv.pdf">Download PDF Version</ExternalLink>
        </Content>
        <Section>
          <SectionHeading bold>Leadership</SectionHeading>
          <Content>
            Leading and building teams, with a focus on high standards,
            mentorship, positive culture, and hiring.
          </Content>
          <Content>
            <DetailPill>Team building</DetailPill>
            <DetailPill>Team direction and mission</DetailPill>
            <DetailPill>Mentoring</DetailPill>
            <DetailPill>Interviewing / Hiring</DetailPill>
            <DetailPill>Product ownership</DetailPill>
          </Content>
          <Content>
            <DetailPill>Pull requests</DetailPill>
            <DetailPill>Linting</DetailPill>
            <DetailPill>Testing</DetailPill>
            <DetailPill>Pairing</DetailPill>
            <DetailPill>Continuous integration/deployment</DetailPill>
          </Content>
        </Section>
        <Section>
          <SectionHeading bold>Front-end</SectionHeading>
          <Content>
            Worked with foundational web technologies, modern technologies and
            frameworks.
          </Content>
          <Content>
            <DetailPill>HTML</DetailPill>
            <DetailPill>CSS</DetailPill>
            <DetailPill>Javascript</DetailPill>
            <DetailPill>React</DetailPill>
            <DetailPill>Typescript</DetailPill>
            <DetailPill>Next.js</DetailPill>
          </Content>
        </Section>
        <Section>
          <SectionHeading bold>Back-end</SectionHeading>
          <Content>
            Built and operated many services and back-end systems. Responsible
            for design, code, reliability, and infrastructure.
          </Content>
          <Content>
            <DetailPill>Service-oriented-architecture</DetailPill>
            <DetailPill>Infrastructure-as-code</DetailPill>
            <DetailPill>Serverless</DetailPill>
            <DetailPill>Node</DetailPill>
            <DetailPill>Java</DetailPill>
            <DetailPill>AWS</DetailPill>
            <DetailPill>Google Cloud</DetailPill>
            <DetailPill>Lambda</DetailPill>
            <DetailPill>Kubernetes</DetailPill>
            <DetailPill>CDK / Cloudformation</DetailPill>
            <DetailPill>GraphQL</DetailPill>
            <DetailPill>Rest</DetailPill>
            <DetailPill>NoSQL</DetailPill>
            <DetailPill>SQL</DetailPill>
          </Content>
        </Section>
      </ContentBox>
      <ContentBox float="right" border>
        <ContentBoxHeading>
          <Icon inline component={Candide} size="lg" />
          Work: Candide
        </ContentBoxHeading>
        <Section>
          <SectionHeading inline>
            Gardens&nbsp;Team — Senior&nbsp;Engineer
          </SectionHeading>
          <DetailPill>2021-current</DetailPill>
          <DetailPill>Bristol, UK</DetailPill>
          <Content>
            Building and operating a ticketing platform for gardens and heritage
            attractions.
          </Content>
          <List>
            <Item>
              Created framework for building multi-page forms in React, first
              used to deliver support for selling tickets as gifts.
              <DetailPill>Typescript</DetailPill>
              <DetailPill>React</DetailPill>
              <DetailPill>Next.js</DetailPill>
              <DetailPill>Chakra UI</DetailPill>
              <DetailPill>Cypress</DetailPill>
            </Item>
            <Item>
              Lead on key integration with third party ticketing solution,
              enabling rapid addition of new features to the platform.
              <DetailPill>Product ownership</DetailPill>
              <DetailPill>Service-oriented-architecture</DetailPill>
            </Item>
            <Item>
              Defined new approach to tech interviewing, including defining
              technical questions and introducing structured behavioural
              interviewing method.
              <DetailPill>Interviewing</DetailPill>
              <DetailPill>Hiring</DetailPill>
            </Item>
          </List>
        </Section>
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
              <DetailPill>GraphQL</DetailPill>
              <DetailPill>Serverless</DetailPill>
              <DetailPill>Lambda</DetailPill>
              <DetailPill>DynamoDB</DetailPill>
            </Item>
            <Item>
              Launched new data products for external customers, key to the
              growth of this area of IMDb's business.
              <DetailPill>Documentation</DetailPill>
              <DetailPill>Java</DetailPill>
              <DetailPill>AWS</DetailPill>
              <DetailPill>S3</DetailPill>
              <DetailPill>SNS</DetailPill>
              <DetailPill>SQS</DetailPill>
            </Item>
            <Item>
              Qualified Amazon{" "}
              <ExternalLink href="https://blog.aboutamazon.co.uk/working-at-amazon/what-is-a-bar-raiser-at-amazon">
                "Bar Raiser"
              </ExternalLink>
              , meaning I was responsible for ensuring a high quality interview
              process and facilitating the final decision. Performed over 300
              interviews for Amazon across many organizations and roles, both
              tech and non-tech.
              <DetailPill>Interviewing</DetailPill>
              <DetailPill>Hiring</DetailPill>
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
            Tech lead building and operating IMDb's high scale website.
          </Content>
          <List>
            <Item>
              First engineer into a new team, defining direction and mission,
              and later expanding to multiple teams.
              <DetailPill>Leadership</DetailPill>
              <DetailPill>Product ownership</DetailPill>
              <DetailPill>Hiring</DetailPill>
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
              uploaded.
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
          </List>
        </Section>
      </ContentBox>
      <ContentBox float="left" border>
        <ContentBoxHeading>
          <Icon inline size="lg" component={Award} />
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
