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
    { href: "mailto:hello@sesame.com", label: "Contact us" },
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
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <nav
        aria-label="Legal"
        className="mt-4 flex gap-4 justify-center text-neutral-500"
      >
        {legalItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
