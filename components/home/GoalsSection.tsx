"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GridBand from "../ui/GridBand";

/**
 * Goals Section Component
 *
 * Matching the Sesame.com design with large numbers and clean layout
 */

export default function GoalsSection() {
  return (
    <section className="py-24 md:py-40">
      <GridBand>
        <div className="col-start-2 col-end-12 space-y-24">
          {/* First Goal */}
          <motion.div
            className="grid lg:grid-cols-[auto,1fr] gap-40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-body text-ink/50 pointer-events-none select-none">
              01
            </p>
            <div>
              <h2 className="heading-2 font-semibold mb-4">
                A personal companion
              </h2>
              <p className="text-body mb-6 max-w-[60ch]">
                An ever-present brilliant friend and conversationalist, keeping
                you informed and organized, helping you be a better version of
                yourself. Try our{" "}
                <a href="#demo" className="underline">
                  research demo
                </a>{" "}
                to experience it.
              </p>
            </div>
          </motion.div>

          {/* Second Goal */}
          <motion.div
            className="grid lg:grid-cols-[auto,1fr] gap-40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-body text-ink/50 pointer-events-none select-none">
              02
            </p>
            <div>
              <h2 className="heading-2 font-semibold mb-4">
                Lightweight eyewear
              </h2>
              <p className="text-body mb-6 max-w-[60ch]">
                Designed to be worn all day, giving you high-quality audio and
                convenient access to your companion who can observe the world
                alongside you.
              </p>
            </div>
          </motion.div>
        </div>
      </GridBand>
    </section>
  );
}
