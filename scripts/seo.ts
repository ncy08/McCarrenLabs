import { Metadata } from "next";

/**
 * SEO and JSON-LD helper functions for Sesame AI Marketing Site
 *
 * Implements requirements F-9: SEO/Schema (WebSite | Organization | BreadcrumbList)
 */

// Base metadata for the site
const siteBaseMetadata = {
  title: "Sesame AI",
  description:
    "Sesame AI is building next-generation AI solutions to solve the world's most challenging problems.",
  metadataBase: new URL("https://www.sesame.com"),
  openGraph: {
    type: "website",
    siteName: "Sesame AI",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sesameai",
  },
  verification: {
    google: "google-site-verification",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

// Home page metadata
export const getHomeMetadata = (): Metadata => {
  return {
    ...siteBaseMetadata,
    title: "Sesame AI | AI Solutions for the Future",
    description:
      "Sesame AI builds advanced AI solutions that help organizations solve complex problems and unlock new possibilities.",
    openGraph: {
      ...siteBaseMetadata.openGraph,
      title: "Sesame AI | AI Solutions for the Future",
      description:
        "Sesame AI builds advanced AI solutions that help organizations solve complex problems and unlock new possibilities.",
      url: "https://www.sesame.com",
      images: [
        {
          url: "/images/og-home.jpg",
          width: 1200,
          height: 630,
          alt: "Sesame AI",
        },
      ],
    },
    alternates: {
      canonical: "/",
    },
  };
};

// Team page metadata
export const getTeamMetadata = (): Metadata => {
  return {
    ...siteBaseMetadata,
    title: "Team | Sesame AI",
    description:
      "Meet the team behind Sesame AI - a group of passionate researchers, engineers, and innovators building the future of AI.",
    openGraph: {
      ...siteBaseMetadata.openGraph,
      title: "Team | Sesame AI",
      description:
        "Meet the team behind Sesame AI - a group of passionate researchers, engineers, and innovators building the future of AI.",
      url: "https://www.sesame.com/team",
      images: [
        {
          url: "/images/og-team.jpg",
          width: 1200,
          height: 630,
          alt: "Sesame AI Team",
        },
      ],
    },
    alternates: {
      canonical: "/team",
    },
  };
};

// JSON-LD data generators
export const getOrganizationJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sesame AI",
    url: "https://www.sesame.com",
    logo: "https://www.sesame.com/images/logo.png",
    sameAs: [
      "https://twitter.com/sesameai",
      "https://www.linkedin.com/company/sesameai",
      "https://github.com/sesameai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@sesame.com",
      contactType: "customer service",
    },
  };
};

export const getWebsiteJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sesame AI",
    url: "https://www.sesame.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.sesame.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
};

export const getBreadcrumbJsonLd = (
  items: Array<{ name: string; item: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.sesame.com${item.item}`,
    })),
  };
};

// Home page breadcrumbs
export const getHomeBreadcrumbJsonLd = () => {
  return getBreadcrumbJsonLd([{ name: "Home", item: "/" }]);
};

// Team page breadcrumbs
export const getTeamBreadcrumbJsonLd = () => {
  return getBreadcrumbJsonLd([
    { name: "Home", item: "/" },
    { name: "Team", item: "/team" },
  ]);
};
