import { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";
import Image from "next/image";

/**
 * Custom 404 page
 *
 * Implements requirement F-10: Custom 404
 */

export default function Custom404() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Page Not Found | Sesame AI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20 -mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <Image
              src="/images/404-illustration.svg"
              alt="Page not found illustration"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-lg text-gray mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg">
              Return Home
            </Button>
            <Button href="/team" variant="outline" size="lg">
              View Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
