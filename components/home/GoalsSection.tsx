"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../Container";

/**
 * Goals Section Component
 *
 * Matching the Sesame.com design with large numbers and clean layout
 */

export default function GoalsSection() {
  return (
    <section className="py-24 md:py-40">
      <Container>
        <div className="space-y-24">
          {/* First Goal */}
          <motion.div
            className="grid gap-10 lg:grid-cols-[auto,1fr]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <span className="font-mono text-3xl text-neutral-300 block mb-4">
                01
              </span>
              <h2 className="heading-2 font-semibold mb-4">
                A personal companion
              </h2>
            </div>
            <div>
              <p className="body-lg mb-6 max-w-xl">
                An ever-present brilliant friend and conversationalist, keeping
                you informed and organized, helping you be a better version of
                yourself.
              </p>
              <Link
                href="/demo"
                className="font-medium hover:text-accent transition-colors underline underline-offset-4"
              >
                Try our research demo
              </Link>
            </div>
          </motion.div>

          {/* Second Goal */}
          <motion.div
            className="grid gap-10 lg:grid-cols-[auto,1fr]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <span className="font-mono text-3xl text-neutral-300 block mb-4">
                02
              </span>
              <h2 className="heading-2 font-semibold mb-4">
                Lightweight eyewear
              </h2>
            </div>
            <div>
              <p className="body-lg mb-6 max-w-xl">
                Designed to be worn all day, giving you high-quality audio and
                convenient access to your companion who can observe the world
                alongside you.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
