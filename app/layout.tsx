import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";
import Script from "next/script";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Load local Season Sans TRIAL font
export const season = localFont({
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
  variable: "--font-season",
  display: "swap",
});

export const metadata: Metadata = {
  title: "McCarren Labs",
  description: "McCarren Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${season.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-gray-700">
        <div
          id="scroll-wrapper"
          className="overflow-y-scroll h-[100dvh] relative z-0"
        >
          <Layout>{children}</Layout>
        </div>

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
