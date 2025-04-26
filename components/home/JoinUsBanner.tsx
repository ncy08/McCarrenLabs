"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";

export default function JoinUsBanner() {
  return (
    <section className="py-24 md:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-2 font-semibold mb-6">Join Sesame</h2>

          <p className="body-lg mb-12 max-w-2xl">
            Sesame is an interdisciplinary product and research team focused on
            making voice companions useful for daily life. Learn more about our{" "}
            <Link href="/team" className="text-accent hover:underline">
              team and mission
            </Link>
            .
          </p>

          {/* Team Photos Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={`/images/team/placeholder-${i}.svg`}
                  alt={`Team member ${i}`}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <Link
            href="https://jobs.ashbyhq.com/sesame"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-accent px-4 py-2 text-accent font-medium hover:bg-accent/10"
          >
            Careers at Sesame
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
