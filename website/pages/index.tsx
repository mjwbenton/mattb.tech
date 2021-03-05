import { GitHub, IconProps, Linkedin, Mail, FileText } from "react-feather";
import Link from "next/link";
import Img from "react-optimized-image";
import ContentBox, { Content } from "../components/ContentBox";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <main>
      <ContentBox float="left">
        <Headshot />
      </ContentBox>
      <ContentBox float="right" border>
        <Content important>
          <span className="font-semibold">Developer.</span> Recently finished 10
          years at Amazon and IMDb. Looking for a new gig later in 2021.
        </Content>
      </ContentBox>
      <ContentBox float="right" border>
        <ul className="space-y-4 text-right">
          <li>
            <Link href="/cv">
              <a>
                <Icon component={FileText} inline color="end" />
                CV / Resume
              </a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/mjwbenton">
              <Icon component={GitHub} inline color="end" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mattb-tech/">
              <Icon component={Linkedin} inline color="end" />
              Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:m@mattb.tech">
              <Icon component={Mail} inline color="end" />
              Contact
            </a>
          </li>
        </ul>
      </ContentBox>
    </main>
  );
}

function Headshot() {
  return (
    <Img
      src={require("../headshot.jpg")}
      sizes={[600]}
      className="rounded-full m-auto"
      width={300}
      height={300}
      alt="Headshot of me."
    />
  );
}
