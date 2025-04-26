import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="en" className={inter.className}>
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
