"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import GridBand from "../ui/GridBand";

export default function HeroSection() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-28 md:py-36 relative">
      {/* Radial gradient accent for large screens */}
      <div className="hidden lg:block absolute top-0 left-1/4 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#FED54A]/30 to-transparent opacity-70"></div>
      </div>

      <GridBand>
        {/* Switch from centered copy on <md to 2-column on lg */}
        <div className="col-span-full md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 relative">
          <motion.h1
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-semibold leading-[1.1] tracking-tight relative z-10 text-[#111113]"
          >
            Bringing the computer to life
          </motion.h1>

          <motion.p
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-body text-gray-700 max-w-[60ch]"
          >
            We believe in a future where computers are lifelike. They will see,
            hear, and collaborate with us the way we're used to. A natural human
            voice is key to unlocking this future.
          </motion.p>

          <motion.div
            className="my-12 w-full h-px bg-gray-200"
            initial={
              prefersReducedMotion
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          <motion.p
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mb-12 text-body text-gray-700 max-w-[60ch]"
          >
            To start, we have two goals.
          </motion.p>

          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/demo"
              className="rounded-md bg-sesame-accent px-6 py-3 text-sesame-primary font-semibold hover:ring-2 hover:ring-sesame-accent hover:ring-offset-2 transition-all"
              aria-label="Try our voice research demo"
            >
              Try our research demo
            </Link>
          </motion.div>
        </div>
      </GridBand>
    </section>
  );
}
