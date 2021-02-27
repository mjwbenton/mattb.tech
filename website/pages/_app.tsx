import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>mattb.tech</title>
        <meta
          name="description"
          content="Matt Benton is a UK-based developer."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
