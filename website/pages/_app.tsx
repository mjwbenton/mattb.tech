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
      <div className="p-4 lg:p-8 print:p-4 font-mono base-background-gradient print:bg-white text-transparent print:text-black">
        <div className="flex border-8 border-gradient print:border-none min-h-screen-spacing-8 lg:min-h-screen-spacing-16 box-border">
          <div className="background-gradient print:bg-white bg-clip-text print:bg-clip-border w-full">
            <header className="w-full pt-16 lg:py-20 text-center text-2xl lg:text-3xl print:py-8 print:text-xl">
              <h1>
                <span className="text-transparent print:hidden">mattb</span>
                <span className="text-gray-100 text-opacity-50 print:hidden">
                  enton
                </span>
                <span className="hidden print:inline text-black">
                  Matt Benton {"<m@mattb.tech>"}
                  <br />
                  Senior Software Engineer, Bristol, UK
                </span>
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
          className="absolute top-12 right-12 lg:top-16 lg:right-16 print:hidden"
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
