import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";

const DemoPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Try Our Demo | Sesame</title>
        <meta
          name="description"
          content="Experience our voice technology demonstration and cross the uncanny valley of conversational voice."
        />
      </Head>

      <section className="pt-32 pb-20 md:py-32 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Crossing the uncanny valley of conversational voice
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
            Try our research demo to experience the next generation of voice
            technology.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black rounded-full mb-6 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.34998 9.6499V11.3499C4.34998 15.5699 7.77998 18.9999 12 18.9999C16.22 18.9999 19.65 15.5699 19.65 11.3499V9.6499"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19V22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Press to start a conversation
              </h2>
              <Button size="lg" className="mb-4">
                Start Demo
              </Button>
              <p className="text-gray-500 text-center">
                (Note: This is a placeholder. The actual demo would include
                interactive voice elements.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DemoPage;
