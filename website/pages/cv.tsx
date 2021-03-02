import ContentBox from "../components/ContentBox";

export default function CV() {
  return (
    <main>
      <ContentBox float="left">
        <p>
          Senior developer and tech-lead with 10 years experience at Amazon
          behind me.
        </p>
        <p>
          During my time at Amazon and IMDb I worked in many different areas
          across the business, and across the stack.
        </p>
      </ContentBox>
      <ContentBox float="right" border>
        TODO: Stuff about IMDb here
      </ContentBox>
      <ContentBox float="right" border>
        TODO: Educational stuff here
      </ContentBox>
    </main>
  );
}
