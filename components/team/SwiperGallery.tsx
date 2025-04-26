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
        {images.map((src, i) => {
          return (
            <SwiperSlide key={`slide-${i}`}>
              <div className="aspect-square relative rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <Image
                  src={src}
                  alt={`Team member ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
