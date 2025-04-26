"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import GridBand from "../ui/GridBand";

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

  // Framer Motion variants for the mobile menu
  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  // Backdrop variants
  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      {/* Fixed desktop sidebar - hidden on mobile */}
      <div className="hidden md:block fixed top-[var(--s200)] left-[var(--s64)] z-50 pointer-events-auto">
        <nav className="flex flex-col gap-6">
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
      </div>

      {/* Mobile header - hidden on desktop */}
      <header className="md:hidden sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
        <GridBand>
          <div className="col-span-12 flex items-center justify-between py-3">
            <Link href="/" className="font-medium">
              Sesame
            </Link>

            {/* Mobile hamburger button with hamburger--spin classes */}
            <button
              type="button"
              className={`hamburger hamburger--spin ${
                isMenuOpen ? "is-active" : ""
              } focus:outline-none`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

            <Link
              href="/demo"
              className="rounded-md bg-accent px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition"
            >
              Demo
            </Link>
          </div>
        </GridBand>
      </header>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              data-menu-underlay
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-out menu */}
            <motion.div
              id="navigation-menu"
              className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-50 md:hidden overflow-y-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="px-6 py-12 flex flex-col h-full">
                <nav className="flex flex-col items-start justify-start flex-grow">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
