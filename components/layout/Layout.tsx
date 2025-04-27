"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Sesame" },
    { href: "/research", label: "Research" },
    { href: "/team", label: "Team" },
    { href: "/demo", label: "Demo" },
    { href: "/login", label: "Log in" },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side vertical navigation (desktop only) */}
      <aside className="hidden md:flex w-48 lg:w-56 border-r border-gray-200 h-screen sticky top-0 left-0 flex-col p-8">
        <Link href="/" className="font-season font-medium text-xl mb-12">
          Sesame
        </Link>
        <nav className="flex flex-col gap-6 mt-4">
          {navLinks.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors duration-200",
                pathname === item.href
                  ? "text-sesame-accent"
                  : "text-gray-700 hover:text-sesame-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile-only header */}
        <div className="md:hidden">
          <Header />
        </div>

        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
