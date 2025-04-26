import React from "react";
import type { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const TeamPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Team | Sesame AI</title>
        <meta name="description" content="Meet our team at Sesame AI" />
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Our Team</h1>
          {/* Team content will be added later */}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default TeamPage;
