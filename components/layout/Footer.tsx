import React from "react";
import Link from "next/link";

/**
 * Footer Component with minimal Sesame-style design
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact us" },
  ];

  const legalItems = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <footer className="py-12 border-t border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Main navigation - centered on one line */}
          <nav className="flex flex-wrap justify-center gap-x-6">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link href={item.href} className="hover-link">
                  {item.label}
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-gray-300 ml-6">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Legal links - small caps */}
          <div className="flex flex-wrap justify-center gap-x-6 text-sm text-gray-500 uppercase tracking-wider">
            {legalItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link href={item.href} className="hover-link">
                  {item.label}
                </Link>
                {index < legalItems.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            &copy; {currentYear} Sesame AI Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
