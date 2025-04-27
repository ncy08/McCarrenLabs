import React from "react";
import Link from "next/link";

export default function CardWaveform() {
  return (
    <Link href="/research/uncanny-valley-voice" className="block mt-12">
      <div className="rounded-lg border border-fog shadow-sm bg-white overflow-hidden">
        <img src="/images/waveform.svg" alt="" className="w-full" />
        <div className="p-4 text-sm flex justify-between items-center">
          <span className="text-gray-700">
            Crossing the uncanny valley of conversational voice
          </span>
          <span className="text-xl">↗</span>
        </div>
      </div>
    </Link>
  );
}
