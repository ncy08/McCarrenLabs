import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import GridBand from "../components/ui/GridBand";

const TeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Team | Sesame AI</title>
        <meta name="description" content="Team" />
      </Head>

      <Layout>
        <main className="bg-white py-24 md:py-40">
          <GridBand>
            <div className="col-start-2 col-end-12 lg:col-end-10">
              <h1 className="heading-2 font-semibold mb-6">Our Team</h1>
              <p className="body-lg mb-12 max-w-2xl">
                {/* Team introduction text will go here */}
              </p>
            </div>
          </GridBand>
        </main>
      </Layout>
    </>
  );
};

export default TeamPage;
