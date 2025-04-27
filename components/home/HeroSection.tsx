"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import GridBand from "../ui/GridBand";
import MotionSection from "../ui/MotionSection";

/**
 * Hero Section Component
 *
 * Note: No illustration image is included here to match Site #2's design.
 * Site #1 previously may have had an illustration of a "Sesame agent" here,
 * but Site #2 flows directly from intro text to goals statement without an image.
 */

export default function HeroSection() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionSection className="pt-24 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Radial gradient accent as pseudo-element with the exact specs requested */}
      <style jsx>{`
        section::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            70% 70% at 50% 30%,
            rgba(244, 180, 26, 0.25),
            transparent 70%
          );
          pointer-events: none;
          mix-blend-mode: screen;
          transform: translateY(-15%);
        }
      `}</style>

      <GridBand>
        <div className="col-span-full md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10 relative">
          <motion.h1
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-heading font-season relative z-10 text-[#111113] max-w-[12ch]"
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="hero-paragraph mt-6 md:mt-8 max-w-[52ch]"
          >
            We believe in a future where computers are lifelike. They will see,
            hear, and collaborate with us the way we're used to. A natural human
            voice is key to unlocking this future.
          </motion.p>

          <motion.div
            className="mt-12 mb-10 md:my-16 w-full h-px bg-gray-200"
            initial={
              prefersReducedMotion
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
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
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hero-paragraph mb-0"
          >
            To start, we have two goals.
          </motion.p>
        </div>
      </GridBand>
    </MotionSection>
  );
}
