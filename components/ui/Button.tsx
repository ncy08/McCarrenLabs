"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  onClick,
}: ButtonProps) {
  // Define classes based on variant and size
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-sesame-accent text-sesame-primary hover:opacity-90 focus:ring-sesame-accent",
    secondary:
      "bg-transparent border-2 border-sesame-accent text-sesame-primary hover:bg-sesame-mute focus:ring-sesame-accent",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1",
    md: "px-5 py-2",
    lg: "text-lg px-8 py-3",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
