"use client";

import React from "react";
import { motion } from "framer-motion";
import GridBand from "../ui/GridBand";
import Link from "next/link";

/**
 * Goals Section Component
 *
 * Matching the Sesame.com design with large numbers and clean layout.
 * Note: Images have been removed to match Site #2's cleaner design.
 */

// Animation variants for the goals section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function GoalsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <GridBand>
        <div className="col-span-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-32 md:space-y-40"
          >
            {/* First Goal */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Goal number as a large background element */}
                <div className="goal-number">01</div>

                <div className="relative z-10 md:ml-16 lg:ml-24">
                  <h2 className="text-h2 font-semibold mb-6">
                    A personal companion
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    An ever-present brilliant friend and conversationalist,
                    keeping you informed and organized, helping you be a better
                    version of yourself.
                  </p>

                  <p className="text-lg text-gray-700 mb-4">
                    Try our{" "}
                    <Link
                      href="/demo"
                      className="text-sesame-primary underline hover:text-sesame-accent transition-colors"
                    >
                      demo
                    </Link>
                    .
                  </p>

                  <Link
                    href="/research/uncanny-valley-voice"
                    className="text-sesame-primary underline hover:text-sesame-accent transition-colors"
                  >
                    Crossing the uncanny valley of conversational voice
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Second Goal */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Goal number as a large background element */}
                <div className="goal-number">02</div>

                <div className="relative z-10 md:ml-16 lg:ml-24">
                  <h2 className="text-h2 font-semibold mb-6">
                    Lightweight eyewear
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Designed to be worn all day, giving you high-quality audio
                    and convenient access to your companion who can observe the
                    world alongside you.
                  </p>

                  <Link
                    href="/research/designed-for-comfort"
                    className="text-sesame-primary underline hover:text-sesame-accent transition-colors"
                  >
                    Designed for all-day comfort
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </GridBand>
    </section>
  );
}
