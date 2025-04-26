"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import GridBand from "../ui/GridBand";
import MotionSection from "../ui/MotionSection";
import TeamGallery from "../team/TeamGallery";

export default function JoinUsBanner() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  // Images for the gallery
  const images = [
    "/images/team/team-1.jpg",
    "/images/team/team-2.jpg",
    "/images/team/team-3.jpg",
    "/images/team/team-4.jpg",
  ];

  return (
    <MotionSection className="py-28 md:py-36 bg-sesame-mute">
      <GridBand>
        <div className="col-start-2 col-end-12 lg:col-end-10">
          <h2 className="heading-2 font-semibold mb-6 text-[#111113]">
            Join Sesame
          </h2>

          <p className="body-lg mb-12 max-w-2xl text-gray-700">
            Sesame is an interdisciplinary product and research team focused on
            making voice companions useful for daily life. Learn more about our{" "}
            <Link href="/team" className="hover-link">
              team and mission
            </Link>
            .
          </p>

          {/* Team Photos Gallery using the new Swiper component */}
          <TeamGallery images={images} />

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
              className="hover-link text-sesame-accent"
              href="https://jobs.ashbyhq.com/sesame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore careers at Sesame"
            >
              See open roles
            </Link>
          </motion.div>
        </div>
      </GridBand>
    </MotionSection>
  );
}
