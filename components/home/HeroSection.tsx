"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero Section Component
 *
 * Note: No illustration image is included here to match Site #2's design.
 * Site #1 previously may have had an illustration of a "Sesame agent" here,
 * but Site #2 flows directly from intro text to goals statement without an image.
 */

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-light1">
      <div className="relative grid grid-cols-6 gap-4 md:gap-8 lg:gap-12 md:grid-cols-12 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 mdlg:px-12 lg:px-16 lglx:px-20 xl:px-24 2xl:px-32 pt-12 md:pt-32 lg:pt-48 pb-8 md:pb-16">
        <div className="col-span-6 md:col-span-10 md:col-start-2 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-medium text-[36px] md:text-[48px] leading-tight font-seasons max-w-[20ch]">
              Bringing the computer to life
            </h1>

            <p className="mt-12 max-w-full md:max-w-[50ch] lg:max-w-[55ch] xl:max-w-[60ch] leading-tight text-[15px] sm:text-[16px] md:text-[18px] font-seasons text-ink/70">
              We believe in a future where computers are lifelike. They will
              see, hear, and collaborate with us the way we're used to. A
              natural human voice is key to unlocking this future.
            </p>

            <div className="line my-8 bg-black/10 h-px w-full border-0" />

            <p className="mt-16 mb-8 text-[18px] font-seasons font-medium">
              To start, we have two goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
