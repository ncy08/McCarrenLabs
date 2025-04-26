"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import GridBand from "../ui/GridBand";

/**
 * Goals Section Component
 *
 * Matching the Sesame.com design with large numbers and clean layout
 */

export default function GoalsSection() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-28 md:py-36">
      <GridBand>
        <div className="col-start-2 col-end-12 space-y-24">
          {/* First Goal */}
          <div className="grid lg:grid-cols-10 gap-6 relative">
            {/* Number 01 - Absolute positioned large number */}
            <motion.div
              className="absolute left-0 -translate-y-[-20%] select-none pointer-events-none"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-[10rem] font-bold text-gray-200/60">
                01
              </span>
            </motion.div>

            {/* Content - Left side spans 6 columns */}
            <div className="lg:col-span-6">
              <motion.div
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="heading-2 font-semibold mb-4 text-[#111113]">
                  A personal companion
                </h2>
                <div className="prose max-w-md">
                  <p className="text-body mb-6">
                    An ever-present brilliant friend and conversationalist,
                    keeping you informed and organized, helping you be a better
                    version of yourself. Try our{" "}
                    <Link href="/demo" className="hover-link">
                      research demo
                    </Link>{" "}
                    to experience it.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - Empty 4 columns for future imagery */}
            <div className="lg:col-span-4"></div>
          </div>

          {/* Second Goal */}
          <div className="grid lg:grid-cols-10 gap-6 relative">
            {/* Number 02 - Absolute positioned large number */}
            <motion.div
              className="absolute left-0 -translate-y-[-20%] select-none pointer-events-none"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-[10rem] font-bold text-gray-200/60">
                02
              </span>
            </motion.div>

            {/* Content - Left side spans 6 columns */}
            <div className="lg:col-span-6">
              <motion.div
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="heading-2 font-semibold mb-4 text-[#111113]">
                  Lightweight eyewear
                </h2>
                <div className="prose max-w-md">
                  <p className="text-body mb-6">
                    Designed to be worn all day, giving you high-quality audio
                    and convenient access to your companion who can observe the
                    world alongside you.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - Empty 4 columns for future imagery */}
            <div className="lg:col-span-4"></div>
          </div>
        </div>
      </GridBand>
    </section>
  );
}
