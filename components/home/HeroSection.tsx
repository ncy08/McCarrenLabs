"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../Container";

export default function HeroSection() {
  return (
    <section className="py-24 md:py-40 text-center">
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl display-1 font-semibold tracking-tight"
        >
          Bringing the computer to life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl body-lg leading-relaxed"
        >
          We believe in a future where computers are lifelike. They will see,
          hear, and collaborate with us the way we're used to. A natural human
          voice is key to unlocking this future.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 mb-12 max-w-2xl body-lg"
        >
          To start, we have two goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/demo"
            className="rounded-md bg-accent px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition"
          >
            Try our demo
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
