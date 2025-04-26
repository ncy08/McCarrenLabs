import { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { initScrollDepthTracking } from "@/scripts/analytics";

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize analytics tracking
  useEffect(() => {
    initScrollDepthTracking();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        id="scroll-wrapper"
        className="overflow-y-scroll h-[100dvh] relative z-0"
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
