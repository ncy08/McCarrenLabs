"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import GridBand from "../ui/GridBand";
import MotionSection from "../ui/MotionSection";

export default function JoinUsBanner() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionSection className="py-20 md:py-28 lg:py-36 bg-sesame-mute">
      <GridBand>
        <div className="col-start-2 col-end-12 lg:col-end-10">
          <h2 className="text-h2 font-semibold mb-6 text-[#111113]">
            Join Sesame
          </h2>

          <p className="body-lg mb-10 max-w-2xl text-gray-700">
            Sesame is an interdisciplinary product and research team focused on
            making voice companions useful for daily life. Learn more about our{" "}
            <Link
              href="/team"
              className="text-sesame-primary underline hover:text-sesame-accent transition-colors"
            >
              team and mission
            </Link>
            .
          </p>

          {/* Team Photos - Two-image layout with proper spacing */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="team-photo overflow-hidden"
            >
              <Image
                src="/images/team/team-group-1.jpg"
                alt="Team at work"
                width={720}
                height={480}
                className="rounded-lg md:rounded-xl object-cover w-full aspect-[3/2] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="team-photo overflow-hidden"
            >
              <Image
                src="/images/team/team-group-2.jpg"
                alt="Team collaboration"
                width={720}
                height={480}
                className="rounded-lg md:rounded-xl object-cover w-full aspect-[3/2] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              className="text-sesame-accent underline text-lg font-medium hover:opacity-80 transition-opacity"
              href="https://jobs.ashbyhq.com/sesame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore careers at Sesame"
            >
              Careers at Sesame
            </Link>
          </motion.div>
        </div>
      </GridBand>
    </MotionSection>
  );
}
