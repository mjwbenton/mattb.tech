import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>mattb.tech</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
