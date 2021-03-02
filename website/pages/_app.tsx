import Head from "next/head";
import "../styles/index.css";
import { useRouter } from "next/router";
import { X } from "react-feather";
import Icon from "../components/Icon";
import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
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
      {/* Wrapper Box. On large screens we set this to the size of the screen so that we can use minimum height in its child. */}
      <div className="md:h-screen md:w-screen p-4 md:p-8 text-transparent font-mono text-lg md:text-2xl">
        {/* Border box. On larger screens it sets a min-height to make the borders go to to the edge of the screen. */}
        <div className="flex md:min-h-full border-8 border-gradient">
          {/* Centered content. Provides the text gradient. */}
          <div className="background-gradient bg-clip-text w-full">
            <header className="w-full pt-16 md:py-24 text-center text-2xl md:text-3xl">
              <h1>
                <span>mattb</span>
                <span className="text-gray-100 text-opacity-50">enton</span>
              </h1>
              <ReturnButton />
            </header>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

function ReturnButton() {
  const router = useRouter();
  const onIndex = router.pathname === "/";
  return (
    <AnimatePresence initial={false}>
      {!onIndex ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.5,
          }}
          exit={{
            opacity: 0,
          }}
          className="absolute top-12 right-12 md:top-16 md:right-16"
        >
          <Link href="/">
            <a>
              <Icon component={X} size="2xl" />
            </a>
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default MyApp;
