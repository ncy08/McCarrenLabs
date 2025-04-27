"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollFades() {
  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Make sure goal cards are visible regardless of animation
    gsap.set(".goal-card", { opacity: 1, y: 0 });

    // Only animate team photos for now
    gsap.from(".team-photo", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: { trigger: ".team-photo", start: "top 85%" },
    });
  }, []);

  return null;
}
