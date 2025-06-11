import React from "react";
import {
  TbMovie,
  TbAward,
  TbFileDownload,
  TbTicket,
  TbLeaf,
} from "react-icons/tb";
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
          Senior full-stack developer and engineering leader with 14 years
          experience, 10 of which spent at Amazon.
        </Content>
        <Content className="print:hidden">
          <Icon inline component={TbFileDownload} />
          <ExternalLink href="/cv.pdf">Download PDF Version</ExternalLink>
        </Content>
        <Section>
          <SectionHeading as="h2" bold>
            Leadership
          </SectionHeading>
          <Content>
            Leading and building teams, with a focus on high standards,
            mentorship, positive culture.
          </Content>
          <Content>
            <DetailPill>Team building</DetailPill>
            <DetailPill>Team direction and mission</DetailPill>
            <DetailPill>Mentoring</DetailPill>
            <DetailPill>Interviewing / Hiring</DetailPill>
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
          <SectionHeading as="h2" bold>
            Front-end
          </SectionHeading>
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
          <SectionHeading as="h2" bold>
            Back-end
          </SectionHeading>
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
            <DetailPill>Terraform</DetailPill>
            <DetailPill>GraphQL</DetailPill>
            <DetailPill>Rest</DetailPill>
            <DetailPill>NoSQL</DetailPill>
            <DetailPill>SQL</DetailPill>
          </Content>
        </Section>
      </ContentBox>
      <ContentBox float="right" border>
        <ContentBoxHeading>
          <Icon inline size="lg" component={TbAward} />
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
          </List>
        </Section>
        <Section>
          <SectionHeading inline>Bog-standard UK education</SectionHeading>
          <DetailPill>Childhood onwards</DetailPill>
          <Content>GCSEs, A Levels, etc.</Content>
        </Section>
      </ContentBox>
      <ContentBox float="right" border className="page-break">
        <ContentBoxHeading>
          <Icon inline component={TbLeaf} size="lg" />
          Work: Ecologi
        </ContentBoxHeading>
        <Section>
          <SectionHeading inline>Engineering&nbsp;Lead</SectionHeading>
          <DetailPill>2023-current</DetailPill>
          <DetailPill>Bristol, UK</DetailPill>
          <Content>
            Promoted to lead engineering across the company. Initially managed
            the team, before transitioning into being the most senior IC.
          </Content>
          <List>
            <Item>
              Manager of the engineering team through a difficult restructuring
              process, defining the plan to reduce, selection pools and
              selection criteria.
              <DetailPill>Performance management</DetailPill>
              <DetailPill>Restructuring</DetailPill>
            </Item>
            <Item>
              Running process to define OKRs within engineering, creating
              proposed objectives, gathering feedback from stakeholders and
              drafting the final plan.
              <DetailPill>Goal Setting</DetailPill>
              <DetailPill>OKRs</DetailPill>
              <DetailPill>Stakeholder Management</DetailPill>
            </Item>
            <Item>
              Created strategy for closing key data gaps and democratising data
              access across the company.
              <DetailPill>Data</DetailPill>
            </Item>
            <Item>
              Worked on technical strategy for the acquisition of another
              company, Net Zero Now, performing technical due dilligence and
              leading the approach to product integration.
              <DetailPill>Acquisition</DetailPill>
            </Item>
          </List>
        </Section>
        <Section>
          <SectionHeading inline>
            Zero&nbsp;Team — Tech&nbsp;Lead
          </SectionHeading>
          <DetailPill>2022-2023</DetailPill>
          <DetailPill>Bristol, UK</DetailPill>
          <Content>
            Managing and providing technical leadership to the team building
            Ecologi Zero, a carbon accounting tool for small businesses.
          </Content>
          <List>
            <Item>
              Providing leadership over the delivery of countless new features
              that enabled us to go from 0 to over 1,000 customers.
              <DetailPill>TypeScript</DetailPill>
              <DetailPill>GraphQL</DetailPill>
              <DetailPill>React</DetailPill>
              <DetailPill>MySQL</DetailPill>
            </Item>
            <Item>
              Overhauled testing practice to take us from a slow, manual testing
              and deployment process, to one that is fully automated.
              <DetailPill>Test Automation</DetailPill>
              <DetailPill>Continuous Deployment</DetailPill>
            </Item>
            <Item>
              Created performance review process for engineers including self
              review and 360 feedback portions.
              <DetailPill>Performance Reviews</DetailPill>
              <DetailPill>Feedback</DetailPill>
            </Item>
          </List>
        </Section>
      </ContentBox>
      <ContentBox float="left" border>
        <ContentBoxHeading>
          <Icon inline component={TbTicket} size="lg" />
          Work: Candide
        </ContentBoxHeading>
        <Section>
          <SectionHeading inline>
            Gardens&nbsp;Team — Senior&nbsp;Engineer
          </SectionHeading>
          <DetailPill>2021-2022</DetailPill>
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
              <DetailPill>Cypress</DetailPill>
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
      <ContentBox float="left" border className="page-break">
        <ContentBoxHeading>
          <Icon inline component={TbMovie} size="lg" />
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
    </main>
  );
}
