import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Load local Season Sans TRIAL font
const season = localFont({
  variable: "--font-season",
  display: "swap",
  fallback: ["Arial"],
  adjustFontFallback: "Arial",
  src: [
    {
      path: "../public/fonts/season/SeasonSansTRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/season/SeasonSansTRIAL-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/season/SeasonSansTRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/season/SeasonSansTRIAL-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/season/SeasonSansTRIAL-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "McCarren Labs | Design-First Software Engineering",
  description:
    "We're a team of designers and engineers building beautiful, high-performance software for innovative companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${season.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-fog text-black antialiased">
        <Layout>{children}</Layout>

        {/* Script for analytics */}
        <Script id="scroll-depth-tracking" strategy="afterInteractive">
          {`
            function initScrollDepthTracking() {
              // Analytics tracking implementation will go here
              console.log('Scroll depth tracking initialized');
            }
            
            document.addEventListener('DOMContentLoaded', function() {
              initScrollDepthTracking();
            });
          `}
        </Script>
      </body>
    </html>
  );
}
