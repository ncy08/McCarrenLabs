"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/swiper-custom.css";

// Static imports - these will only be used client-side through conditional rendering
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Create a NoSSR wrapper
const NoSSR: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <>{children}</> : null;
};

// Type definition for SwiperGallery props
interface SwiperGalleryProps {
  images: string[];
}

// Import SwiperGallery dynamically
const SwiperGallery = dynamic<SwiperGalleryProps>(
  () => import("./SwiperGallery").then((mod) => mod.default),
  { ssr: false }
);

// Create a fallback grid
const ImageGrid = ({ images }: { images: string[] }) => (
  <ul role="list" className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
    {images.map((src, i) => (
      <li key={i} className="team-photo">
        <Image
          src={src}
          alt={`Team member ${i + 1}`}
          width={720}
          height={900}
          className="rounded-xl object-cover w-full aspect-[3/4]"
        />
      </li>
    ))}
  </ul>
);

interface TeamGalleryProps {
  images: string[];
}

const TeamGallery: React.FC<TeamGalleryProps> = ({ images }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Show fallback grid at first or if JavaScript is disabled */}
      <div className={mounted ? "hidden" : "block"}>
        <ImageGrid images={images} />
      </div>

      {/* Show Swiper only on client-side */}
      <NoSSR>
        <SwiperGallery images={images} />
      </NoSSR>
    </>
  );
};

export default TeamGallery;
