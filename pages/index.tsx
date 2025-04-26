import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import HeroSection from "../components/home/HeroSection";
import GoalsSection from "../components/home/GoalsSection";
import JoinUsBanner from "../components/home/JoinUsBanner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

/**
 * Landing Page
 *
 * Implements the home page with sections:
 * 1. Hero
 * 2. Goals
 * 3. Join-Us banner
 * 4. Footer (included in Layout)
 */

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sesame – Bringing the computer to life</title>
        <meta
          name="description"
          content="We believe in a future where computers are lifelike. They will see, hear, and collaborate with us the way we're used to."
        />
        <meta
          property="og:title"
          content="Sesame – Bringing the computer to life"
        />
        <meta
          property="og:description"
          content="We believe in a future where computers are lifelike. They will see, hear, and collaborate with us the way we're used to."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sesame.com" />
        <meta
          property="og:image"
          content="https://www.sesame.com/images/og-home.jpg"
        />
        <meta property="og:site_name" content="Sesame" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sesame" />
        <link rel="canonical" href="https://www.sesame.com" />
      </Head>

      {/* JSON-LD structured data */}
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sesame",
            url: "https://www.sesame.com",
            logo: "https://www.sesame.com/images/logo.png",
            sameAs: [
              "https://twitter.com/sesame",
              "https://linkedin.com/company/sesame",
            ],
          }),
        }}
      />

      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Sesame",
            url: "https://www.sesame.com",
          }),
        }}
      />

      <Header />

      <main>
        <HeroSection />
        <GoalsSection />
        <JoinUsBanner />
      </main>

      <Footer />
    </>
  );
};

export default Home;
