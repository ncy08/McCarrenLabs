"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { href: "/demo", label: "Demo" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 backdrop-blur-lg bg-white/80 supports-backdrop:backdrop-blur z-40 w-full transition-all duration-200",
        hasScrolled ? "shadow-sm" : ""
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left block: Logo and navigation links */}
          <div className="flex items-center gap-4">
            {/* Logo wordmark */}
            <Link href="/" className="font-medium">
              Sesame
            </Link>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-4">
              {nav.slice(1, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-medium hover-link",
                    pathname === item.href ? "text-sesame-accent" : ""
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right block: CTA button with ml-auto to push to far-right */}
          <div className="ml-auto">
            <Link
              href="/demo"
              className="rounded-full border border-sesame-primary px-4 py-1 hover:bg-white/10 transition-colors"
              aria-label="Try our demo"
            >
              Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex md:hidden items-center p-2 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-2 font-medium transition-colors hover:text-sesame-accent",
                  pathname === item.href ? "text-sesame-accent" : ""
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
