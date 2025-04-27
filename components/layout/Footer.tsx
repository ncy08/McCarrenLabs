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
    { href: null, label: "Contact us" },
  ];

  const legalItems = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <footer className="border-t py-10 text-sm text-neutral-700">
      <nav
        aria-label="Primary footer links"
        className="flex gap-6 justify-center"
      >
        {navItems.map((item) =>
          item.href ? (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-sesame-accent transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span key={item.label} className="text-neutral-700">
              {item.label}
            </span>
          )
        )}
      </nav>
      <nav
        aria-label="Legal"
        className="mt-4 flex gap-4 justify-center text-neutral-500"
      >
        {legalItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-sesame-accent transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="mt-6 text-center text-xs text-neutral-500">
        Copyright © 2025 Sesame AI Inc. All rights reserved.
      </p>
    </footer>
  );
}
