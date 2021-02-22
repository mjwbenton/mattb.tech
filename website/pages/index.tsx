import { GitHub, Linkedin, Mail } from "react-feather";

export default function Home() {
  return (
    <>
      {/* Wrapper Box. On large screens we set this to the size of the screen so that we can use minimum height in its child. */}
      <div className="md:h-screen md:w-screen p-4 md:p-8 text-transparent font-mono text-lg md:text-xl">
        {/* Border box. On larger screens it sets a min-height to make the borders go to to the edge of the screen. */}
        <div className="flex md:min-h-full justify-center items-center border-8 border-gradient">
          {/* Centered content. Provides the text gradient. */}
          <div className="background-gradient bg-clip-text">
            <header className="w-full p-8 text-center text-xl md:text-2xl">
              <span>mattb</span>
              <span className="text-gray-100 text-opacity-50">enton</span>
            </header>
            <main>
              <ContentBox float="left">
                <Headshot />
              </ContentBox>
              <ContentBox float="right" border>
                <span className="font-semibold">Developer.</span>{" "}
                <span>
                  Recently finished 10 years at Amazon and IMDb. Looking for a
                  new gig later in 2021.
                </span>
              </ContentBox>
              <ContentBox float="right" border>
                <ul className="space-y-4 text-right">
                  <li>
                    <a href="https://github.com/mjwbenton">
                      <Icon component={GitHub} />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mattb-tech/">
                      <Icon component={Linkedin} />
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="mailto:m@mattb.tech">
                      <Icon component={Mail} />
                      Contact
                    </a>
                  </li>
                </ul>
              </ContentBox>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

function Headshot() {
  return (
    <picture>
      <source
        srcSet={require("../headshot.jpg?resize&size=600&format=webp")}
        type="image/webp"
      />
      <source
        srcSet={require("../headshot.jpg?resize&size=600")}
        type="image/jpeg"
      />
      <img
        src={require("../headshot.jpg?resize&size=300")}
        className="rounded-full m-auto"
        width={300}
        height={300}
        alt="Headshot of me."
      />
    </picture>
  );
}

function Icon({ component }) {
  const Component = component;
  return (
    <Component
      size={18}
      className="inline svg-stroke-end-color mr-2 -top-0.5 relative"
    />
  );
}

function ContentBox({ children, float, border = false, className = "" }) {
  return (
    <div
      className={`max-w-full overflow-hidden md:w-6/12 my-8 p-8
        ${border ? "border-t-2 border-gradient" : ""}
        ${float === "left" ? "md:float-left" : ""}
        ${float === "right" ? "md:float-right" : ""}
        ${className}`}
    >
      {children}
    </div>
  );
}
