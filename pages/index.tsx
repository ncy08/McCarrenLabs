import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import GoalsSection from "@/components/home/GoalsSection";
import JoinUsBanner from "@/components/home/JoinUsBanner";
import CareersBanner from "@/components/home/CareersBanner";
import {
  getHomeMetadata,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
  getHomeBreadcrumbJsonLd,
} from "@/scripts/seo";

/**
 * Landing Page
 *
 * Implements the home page with sections:
 * 1. Hero
 * 2. Goals
 * 3. Join-Us banner
 * 4. Careers banner
 * 5. Footer (included in Layout)
 */

const Home: NextPage = () => {
  // SEO metadata
  const metadata = getHomeMetadata();

  // JSON-LD structured data
  const organizationJsonLd = getOrganizationJsonLd();
  const websiteJsonLd = getWebsiteJsonLd();
  const breadcrumbJsonLd = getHomeBreadcrumbJsonLd();

  return (
    <Layout>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta
          property="og:title"
          content={metadata.openGraph?.title as string}
        />
        <meta
          property="og:description"
          content={metadata.openGraph?.description as string}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sesame.com" />
        <meta
          property="og:image"
          content="https://www.sesame.com/images/og-home.jpg"
        />
        <meta property="og:site_name" content="Sesame AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sesameai" />
        <link rel="canonical" href="https://www.sesame.com" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      {/* Page content */}
      <HeroSection />
      <GoalsSection />
      <JoinUsBanner />
      <CareersBanner />
    </Layout>
  );
};

export default Home;
