"use client";

import React from "react";
import Image from "next/image";

// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Define prop types
interface SwiperGalleryProps {
  images: string[];
}

// The client-side only Swiper gallery
const SwiperGallery: React.FC<SwiperGalleryProps> = ({ images }) => {
  // Prepare slides array
  const slides = images.map((src, i) => (
    // Using array index in a component that doesn't change order is acceptable
    // eslint-disable-next-line react/no-array-index-key
    <div key={i} className="w-full team-photo">
      <Image
        src={src}
        alt={`Team member ${i + 1}`}
        width={720}
        height={900}
        className="rounded-xl object-cover w-full aspect-[3/4]"
      />
    </div>
  ));

  return (
    <div className="mb-12">
      <Swiper
        modules={[Navigation, Keyboard, A11y]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={true}
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="team-gallery-swiper"
      >
        {/* Creating slides without keys on SwiperSlide to avoid typing issues */}
        {images.map((_, index) => (
          <SwiperSlide>{slides[index]}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
