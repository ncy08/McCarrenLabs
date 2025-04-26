"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import GridBand from "../ui/GridBand";

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
    <section className="py-28 md:py-36 bg-sesame-mute">
      <GridBand>
        <motion.div
          className="col-start-2 col-end-12 lg:col-end-10"
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
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

          {/* Team Photos Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="aspect-square relative rounded-2xl shadow-lg overflow-hidden"
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Image
                  src={src}
                  alt={`Team member ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
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
              className="hover-link text-sesame-accent"
              href="https://sesame.io/careers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore careers at Sesame.io"
            >
              Join Sesame →
            </Link>
          </motion.div>
        </motion.div>
      </GridBand>
    </section>
  );
}
