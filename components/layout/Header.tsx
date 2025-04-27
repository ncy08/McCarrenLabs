"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { clsx } from "clsx";

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
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/team", label: "Team" },
    { href: "/demo", label: "Demo" },
    { href: "#login", label: "Log in" },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-light1 transition-shadow duration-300 h-[64px] flex items-center"
    >
      <div className="w-full flex items-center justify-between px-[6vw]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/leaf-logo.svg"
              alt="Sesame Logo"
              width={26}
              height={26}
              className="w-[26px] h-[26px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - only for medium devices, not large (lg uses sidebar) */}
        <nav className="hidden md:flex lg:hidden items-center gap-[var(--s16)]">
          {navLinks.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sidebar-light transition-colors duration-200",
                item.href === "#login"
                  ? "text-tertiary hover:text-secondary"
                  : pathname === item.href
                  ? "text-main"
                  : "text-secondary hover:text-main"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:lg:hidden p-[var(--s4)] pt-[6px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          <div
            className={cn(
              "hamburger w-[24px] h-[24px]",
              isMenuOpen && "is-active"
            )}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed md:hidden inset-0 top-[var(--s40)] bg-light1 z-40 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "transform-none" : "translate-y-full"
        )}
      >
        <nav className="flex flex-col p-[var(--s16)] h-full">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "py-[var(--s12)] text-sidebar border-normal/10",
                item.href === "#login"
                  ? "text-tertiary"
                  : pathname === item.href
                  ? "text-main"
                  : "text-secondary"
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
