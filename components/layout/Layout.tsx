"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/team", label: "Team" },
    { href: "/demo", label: "Demo" },
    { href: "#login", label: "Log in" },
  ];

  return (
    <div className="min-h-screen flex bg-[#f4f4f4]">
      {/* Left side vertical navigation (desktop only) */}
      <aside className="fixed left-0 top-0 h-screen w-[200px] pl-8 pt-8 border-r border-gray-100 hidden lg:flex flex-col gap-4 bg-white z-50">
        <Link href="/" className="mb-12">
          <Image
            src="/images/leaf-logo.svg"
            alt="Sesame Logo"
            width={26}
            height={26}
            className="w-[26px] h-[26px]"
          />
        </Link>
        <nav className="flex flex-col gap-6 mt-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors duration-200",
                item.href === "#login"
                  ? "text-gray-400 hover:text-gray-600"
                  : pathname === item.href
                  ? "text-[#373737]"
                  : "text-gray-500 hover:text-[#373737]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-white lg:pl-[200px]">
        {/* Header for mobile/tablet */}
        <div className="lg:hidden">
          <Header />
        </div>

        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
