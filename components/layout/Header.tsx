"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Add scroll shadow with IntersectionObserver
  useEffect(() => {
    const el = headerRef.current!;
    const io = new IntersectionObserver(
      ([e]) => el.classList.toggle("shadow-sm", !e.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" }
    );
    io.observe(document.body);
    return () => io.disconnect();
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

  const navLinks = [
    { href: "/", label: "Sesame" },
    { href: "/research", label: "Research" },
    { href: "/team", label: "Team" },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-300"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 h-16">
        {/* Left block: Logo and navigation links */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo wordmark */}
          <Link href="/" className="font-season font-medium text-lg">
            Sesame
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Desktop navigation"
            className="hidden md:flex items-center gap-4 sm:gap-6"
          >
            {navLinks.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link text-base font-medium",
                  pathname === item.href ? "active" : ""
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Demo CTA button - visible on all screen sizes */}
        <div className="ml-auto">
          <Link
            href="/demo"
            className={cn(
              "demo-cta px-4 py-1.5 sm:px-5 sm:py-2",
              pathname === "/demo" ? "active" : ""
            )}
            aria-label="Try our demo"
          >
            Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "hamburger hamburger--spin md:hidden ml-2 sm:ml-4",
            isMenuOpen ? "is-active" : ""
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      {/* Mobile menu (separate nav element for mobile) */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed md:hidden inset-0 top-16 bg-white z-40 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "transform-none" : "translate-y-full"
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col p-4 sm:p-6 h-full"
        >
          {[...navLinks, { href: "/demo", label: "Demo" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "py-2 sm:py-3 text-lg sm:text-xl font-medium transition-colors hover:text-sesame-accent",
                pathname === item.href ? "text-sesame-accent" : ""
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
