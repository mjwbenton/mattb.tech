import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>mattb.tech</title>
        <meta
          name="description"
          content="Matt Benton is a UK-based developer."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
