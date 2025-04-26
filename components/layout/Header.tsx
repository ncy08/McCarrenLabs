"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const nav = [
    { href: "/", label: "Sesame" },
    { href: "/research", label: "Research" },
    { href: "/team", label: "Team" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
      <Container>
        <div className="flex items-center justify-between py-3">
          <nav className="hidden md:flex gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium relative hover:text-accent transition-colors ${
                  pathname === item.href
                    ? "text-accent before:absolute before:-bottom-1 before:w-full before:h-0.5 before:bg-accent"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span
                className={`block w-5 h-0.5 bg-black transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-black transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-black transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>

          <Link
            href="/demo"
            className="rounded-md bg-accent px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition ml-auto md:ml-0"
          >
            Demo
          </Link>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-16">
          <nav className="flex flex-col items-center justify-center h-full">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl py-3 ${
                  pathname === item.href ? "text-accent" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/demo"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 rounded-md bg-accent px-6 py-3 text-white font-semibold shadow hover:opacity-90"
            >
              Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
