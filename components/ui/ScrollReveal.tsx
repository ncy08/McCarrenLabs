"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

/**
 * ScrollReveal Component
 *
 * Implements requirement F-3: Scroll-reveal (rootMargin -25%; 400ms; 60ms stagger)
 */

type ScrollRevealProps = {
  children: ReactNode;
  staggerIndex?: number;
  className?: string;
};

const ScrollReveal = ({
  children,
  staggerIndex = 0,
  className = "",
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-25%",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const staggerClass = staggerIndex > 0 ? `stagger-${staggerIndex}` : "";

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${
        isVisible ? "revealed" : ""
      } ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
