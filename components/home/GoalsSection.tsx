"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Goals Section Component
 *
 * Matching the Sesame.com design with large numbers and clean layout.
 * Note: Images have been removed to match Site #2's cleaner design.
 */

export default function GoalsSection() {
  const prefersReducedMotion = useReducedMotion();

  const goals = [
    {
      number: "01",
      title: "A personal companion",
      description:
        "An ever-present brilliant friend and conversationalist, keeping you informed and organized, helping you be a better version of yourself.",
      link: {
        href: "/research/uncanny-valley-voice",
        text: "Crossing the uncanny valley of conversational voice",
      },
    },
    {
      number: "02",
      title: "Lightweight eyewear",
      description:
        "Designed to be worn all day, giving you high-quality audio and convenient access to your companion who can observe the world alongside you.",
      image: "/images/eyewear.jpg",
    },
  ];

  return (
    <div className="bg-light1">
      {goals.map((goal, index) => (
        <motion.section
          key={goal.number}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden"
        >
          <div className="relative grid grid-cols-6 gap-4 md:gap-8 lg:gap-12 md:grid-cols-12 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 mdlg:px-12 lg:px-16 lglx:px-20 xl:px-24 2xl:px-32 py-12 md:py-20 lg:py-28">
            <div className="col-span-6 md:col-span-10 md:col-start-2 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
              <p className="text-ink/40 text-base font-normal mb-4">
                {goal.number}
              </p>

              <h2 className="text-h2 font-season text-main mb-[var(--s16)]">
                {goal.title}
              </h2>

              <p className="text-body text-secondary mb-[var(--s24)] max-w-2xl">
                {goal.description}
              </p>

              {goal.link && (
                <Link
                  href={goal.link.href}
                  className="inline-block text-secondary hover:text-main transition-colors underline"
                >
                  {goal.link.text}
                </Link>
              )}

              {goal.image && (
                <div className="mt-[var(--s20)]">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    width={800}
                    height={500}
                    className="rounded-radius2 shadow-subtle w-full"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
