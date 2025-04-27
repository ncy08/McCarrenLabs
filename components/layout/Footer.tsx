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
  ];

  const legalItems = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <footer className="bg-white py-10 text-sm text-gray-600">
      <div className="px-[6vw] max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <nav className="flex gap-6 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span>Contact us</span>

          <div className="flex gap-4">
            <a
              href="https://twitter.com/sesame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sesame on X (Twitter)"
              className="text-gray-600 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M13.6823 10.6218L20.2391 3H18.5752L12.9396 9.52482L8.43752 3H3.2998L10.0129 13.0331L3.2998 21H4.96375L10.7551 14.1301L15.4261 21H20.5638L13.6819 10.6218H13.6823ZM11.5684 13.0331L10.9824 12.1635L5.31979 4.28571H7.70216L12.1957 10.5232L12.7817 11.3928L18.5759 19.4875H16.1935L11.5684 13.0335V13.0331Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/sesame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sesame on LinkedIn"
              className="text-gray-600 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M20.5 3H3.5C2.67 3 2 3.67 2 4.5V19.5C2 20.33 2.67 21 3.5 21H20.5C21.33 21 22 20.33 22 19.5V4.5C22 3.67 21.33 3 20.5 3ZM8 19H5V9H8V19ZM6.5 7.5C5.67 7.5 5 6.83 5 6C5 5.17 5.67 4.5 6.5 4.5C7.33 4.5 8 5.17 8 6C8 6.83 7.33 7.5 6.5 7.5ZM19 19H16V13.5C16 12.67 15.33 12 14.5 12C13.67 12 13 12.67 13 13.5V19H10V9H13V10.43C13.5 9.83 14.5 9 15.5 9C17.43 9 19 10.57 19 12.5V19Z" />
              </svg>
            </a>
          </div>

          <div className="flex gap-4 text-gray-500">
            {legalItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="text-xs text-gray-500">
            Copyright © 2025 Sesame AI Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
