"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GridBand from "../ui/GridBand";

export default function HeroSection() {
  return (
    <section className="py-24 md:py-40">
      <GridBand>
        <div className="col-start-4 col-end-12 lg:col-end-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-h1 font-serifify font-semibold tracking-tight"
          >
            Bringing the computer to life
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-body text-ink/80 max-w-[60ch]"
          >
            We believe in a future where computers are lifelike. They will see,
            hear, and collaborate with us the way we're used to. A natural human
            voice is key to unlocking this future.
          </motion.p>

          <motion.div
            className="my-12 w-full h-px bg-subtle"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mb-12 text-body text-ink/80 max-w-[60ch]"
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
        </div>
      </GridBand>
    </section>
  );
}
