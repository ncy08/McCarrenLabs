"use client";

import React from "react";
import Link from "next/link";

/**
 * Goals Section Component
 *
 * Matching the Sesame.com design with large numbers and clean layout
 */

export default function GoalsSection() {
  return (
    <section className="py-28 md:py-36 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Goals</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* First Goal */}
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <span className="text-8xl font-bold text-gray-200 absolute -top-10 -left-6">
              01
            </span>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">
                A personal companion
              </h3>
              <h4 className="text-lg font-medium text-sesame-accent mb-3">
                Crossing the uncanny valley of conversational voice
              </h4>
              <p className="mb-6 text-gray-700">
                An ever-present brilliant friend and conversationalist, keeping
                you informed and organized, helping you be a better version of
                yourself. Try our{" "}
                <Link href="/demo" className="text-blue-600 hover:underline">
                  research demo
                </Link>{" "}
                to experience it.
              </p>
            </div>
          </div>

          {/* Second Goal */}
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <span className="text-8xl font-bold text-gray-200 absolute -top-10 -left-6">
              02
            </span>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">
                Lightweight eyewear
              </h3>
              <h4 className="text-lg font-medium text-sesame-accent mb-3">
                Designed for all-day comfort
              </h4>
              <p className="mb-6 text-gray-700">
                Designed to be worn all day, giving you high-quality audio and
                convenient access to your companion who can observe the world
                alongside you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
