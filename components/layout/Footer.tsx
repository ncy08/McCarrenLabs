import React from "react";
import Link from "next/link";

/**
 * Footer Component with minimal Sesame-style design
 */

export default function Footer() {
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
          {/* Main navigation - single line with flex-wrap */}
          <nav className="flex flex-wrap gap-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Legal links - small caps */}
          <div className="flex flex-wrap gap-x-4 text-sm text-gray-500 uppercase tracking-wider">
            {legalItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            Copyright © 2025 Sesame AI Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
