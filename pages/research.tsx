import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";

const ResearchPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Research | Sesame</title>
        <meta
          name="description"
          content="Explore our research on conversational voice technology and how we're crossing the uncanny valley of voice."
        />
      </Head>

      <section className="pt-32 pb-16 md:py-32 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Crossing the uncanny valley of conversational voice
          </h1>

          <p className="text-gray-500 mb-12">February 27, 2025</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              How do we know when someone truly understands us? It is rarely
              just our words—it is in the subtleties of voice: the rising
              excitement, the thoughtful pause, the warm reassurance.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Voice is our most intimate medium as humans, carrying layers of
              meaning through countless variations in tone, pitch, rhythm, and
              emotion.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Today's digital voice assistants lack essential qualities to make
              them truly useful. Without unlocking the full power of voice, they
              cannot hope to effectively collaborate with us. A personal
              assistant who speaks only in a neutral tone has difficulty finding
              a permanent place in our daily lives after the initial novelty
              wears off.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-12">
              Over time this emotional flatness becomes more than just
              disappointing—it becomes exhausting.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Achieving voice presence
            </h3>

            <p className="text-lg text-gray-700 mb-12">
              At Sesame, our goal is to achieve "voice presence"—the magical
              quality that makes spoken interactions feel real, understood, and
              valued. We are creating conversational partners that do not just
              process requests; they engage in genuine dialogue that builds
              confidence and trust over time. In doing so, we hope to realize
              the untapped potential of voice as the ultimate interface for
              instruction and understanding.
            </p>

            <div className="mb-12">
              <Button href="/demo" size="lg">
                Try our demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchPage;
