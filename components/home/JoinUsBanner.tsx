"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function JoinUsBanner() {
  return (
    <section className="relative px-[6vw] py-14 bg-white">
      <h2 className="text-[32px] font-semibold mb-6">Join Sesame</h2>

      <p className="text-[18px] leading-[1.6] text-gray-600 mb-10 max-w-xl">
        Sesame is an interdisciplinary product and research team focused on
        making voice companions useful for daily life. Learn more about our{" "}
        <Link href="/team" className="underline hover:text-black">
          team and mission
        </Link>
        .
      </p>

      {/* Team Photos - One column on mobile, two columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="overflow-hidden">
          <Image
            src="/images/team/team1.jpg"
            alt="Team at work"
            width={720}
            height={480}
            className="rounded-lg shadow-sm object-cover w-full aspect-[3/2]"
          />
        </div>

        <div className="overflow-hidden">
          <Image
            src="/images/team/team2.jpg"
            alt="Team collaboration"
            width={720}
            height={480}
            className="rounded-lg shadow-sm object-cover w-full aspect-[3/2]"
          />
        </div>
      </div>

      <div className="mt-10">
        <Link
          className="text-gray-600 underline hover:text-black text-lg"
          href="https://jobs.ashbyhq.com/sesame"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore careers at Sesame"
        >
          Careers at Sesame
        </Link>
      </div>
      <hr className="h-px bg-fog border-0 absolute inset-x-0 -bottom-px" />
    </section>
  );
}
