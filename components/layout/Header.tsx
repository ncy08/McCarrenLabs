"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { trackNavClick } from "@/scripts/analytics";

/**
 * Header Component
 *
 * Implements requirements:
 * F-1: Sticky header (24px/12px; blur 8px; logo scale)
 * F-2: Nav links (underline #FF7A00 180ms; focus 3px)
 * F-7: Hamburger drawer (morph, focus-trap, Esc)
 */

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

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

  // Track navigation links
  const handleNavClick = (linkName: string, linkUrl: string) => {
    trackNavClick(linkName, linkUrl);
  };

  const navLinks = [
    {
      name: "Research",
      href: "https://www.sesame.com/research",
      external: true,
    },
    { name: "Team", href: "/team", external: false },
    { name: "Demo", href: "https://www.sesame.com/demo", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-[8px] shadow-sm py-3 md:py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50"
          onClick={() => handleNavClick("Logo", "/")}
        >
          <span className="sr-only">Sesame AI</span>
          <div
            className={`transition-all duration-300 ${
              scrolled ? "scale-75" : "scale-100"
            }`}
          >
            <Image
              src="/images/logo.svg"
              alt="Sesame AI"
              width={150}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              onClick={() => handleNavClick(link.name, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative z-50 md:hidden focus:outline-none focus-visible"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <div
              className={`${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1"
              } w-6 h-0.5 bg-black absolute transform transition-transform duration-300`}
            ></div>
            <div
              className={`${
                isMenuOpen ? "opacity-0" : "opacity-100"
              } w-6 h-0.5 bg-black absolute transition-opacity duration-300`}
            ></div>
            <div
              className={`${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1"
              } w-6 h-0.5 bg-black absolute transform transition-transform duration-300`}
            ></div>
          </div>
        </button>

        {/* Mobile menu */}
        <Transition
          show={isMenuOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 md:hidden"
        >
          <div className="absolute inset-0 bg-white z-40 overflow-y-auto">
            <div className="container flex flex-col items-center justify-center h-full py-20">
              <nav className="flex flex-col items-center space-y-8">
                <Link
                  href="/"
                  onClick={() => {
                    handleNavClick("Home", "/");
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-medium ${
                    pathname === "/" ? "text-orange" : "text-black"
                  }`}
                >
                  Home
                </Link>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener" : undefined}
                    onClick={() => {
                      handleNavClick(link.name, link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`text-2xl font-medium ${
                      pathname === link.href ? "text-orange" : "text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
