"use client";

import { useState, useRef, useEffect, ReactNode, KeyboardEvent } from "react";
import { trackGallerySwipe } from "@/scripts/analytics";

/**
 * Carousel Component
 *
 * Implements requirement F-4: Carousel x2 (scroll-snap, arrows, dots, a11y)
 */

type CarouselProps = {
  children: ReactNode[];
  name: string;
  slidesToShow?: number;
  gap?: number;
};

const Carousel = ({
  children,
  name,
  slidesToShow = 1,
  gap = 24,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = children.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  // Handle navigation
  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    // Clamp the index within bounds
    const newIndex = Math.min(Math.max(0, index), maxIndex);

    if (newIndex !== activeIndex) {
      setIsTransitioning(true);
      setActiveIndex(newIndex);

      // Track navigation in analytics
      const direction = newIndex > activeIndex ? "right" : "left";
      trackGallerySwipe(name, direction, newIndex);
    }
  };

  // Slide navigation helpers
  const next = () => goToSlide(activeIndex + 1);
  const prev = () => goToSlide(activeIndex - 1);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        prev();
        break;
      case "ArrowRight":
        e.preventDefault();
        next();
        break;
    }
  };

  // Reset transition flag after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match transition duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Scroll to active slide
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount =
        activeIndex * (carouselRef.current.offsetWidth / slidesToShow);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, slidesToShow]);

  return (
    <div
      className="carousel-container relative"
      role="region"
      aria-label={`${name} carousel`}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Carousel Track */}
      <div ref={carouselRef} className="overflow-x-hidden" aria-live="polite">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-auto"
              style={{
                flex: `0 0 calc(${100 / slidesToShow}% - ${
                  (gap * (slidesToShow - 1)) / slidesToShow
                }px)`,
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${totalSlides}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-2">
          {/* Previous Button */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray/20 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={activeIndex >= maxIndex}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray/20 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex space-x-2" role="tablist" aria-label="Slides">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 focus:outline-none focus-visible ${
                activeIndex === index ? "bg-orange" : "bg-gray/30"
              }`}
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
