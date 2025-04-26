import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/Layout";

const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Team | Sesame AI</title>
        <meta name="description" content="Team" />
      </Head>

      <Layout>
        <main className="bg-[rgb(var(--color-light-1))]">
          {/* Intentionally left blank as requested */}
        </main>
      </Layout>
    </>
  );
};

export default TeamPage;
