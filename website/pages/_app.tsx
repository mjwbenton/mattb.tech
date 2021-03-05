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
      <div className="p-4 lg:p-8 font-mono base-background-gradient">
        <div className="flex border-8 border-gradient min-h-screen-spacing-8 lg:min-h-screen-spacing-16 box-border">
          {/* Centered content. Provides the text gradient. */}
          <div className="background-gradient bg-clip-text w-full">
            <header className="w-full pt-16 lg:py-24 text-center text-2xl lg:text-3xl">
              <h1>
                <span className="text-transparent">mattb</span>
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
          className="absolute top-12 right-12 lg:top-16 lg:right-16"
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
