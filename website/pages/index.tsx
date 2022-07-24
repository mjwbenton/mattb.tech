import {
  TbLeaf,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
  TbFile,
} from "react-icons/tb";
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
        <Content className="text-lg">
          <span className="font-semibold">Software Engineer</span>. Tech lead at{" "}
          <a href="https://ecologi.com" className="whitespace-nowrap">
            <Icon component={TbLeaf} inline />
            Ecologi
          </a>
          . Ex Amazon/IMDb.
        </Content>
      </ContentBox>
      <ContentBox float="right" border>
        <ul className="space-y-4 text-right">
          <li>
            <Link href="/cv">
              <a>
                <Icon component={TbFile} inline />
                CV / Resume
              </a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/mjwbenton">
              <Icon component={TbBrandGithub} inline />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mattb-tech/">
              <Icon component={TbBrandLinkedin} inline />
              Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:m@mattb.tech">
              <Icon component={TbMail} inline />
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
