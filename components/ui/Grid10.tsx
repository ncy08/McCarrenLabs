"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Grid10Props {
  children: React.ReactNode;
  className?: string;
}

export default function Grid10({ children, className = "" }: Grid10Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(10,minmax(0,1fr))] gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}
