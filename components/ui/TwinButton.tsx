"use client";

import React from "react";
import tw, { styled } from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
  children: React.ReactNode;
}

const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  // The base button styles
  tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

  // Use the variant prop to change the background color
  variant === "primary" &&
    tw`bg-sesame-accent text-sesame-primary hover:opacity-90`,

  // Use the variant prop to change the background color
  variant === "secondary" &&
    tw`bg-transparent border-2 border-sesame-accent text-sesame-primary hover:bg-sesame-mute`,

  // Use the isSmall prop to change the size
  isSmall ? tw`text-sm` : tw`text-lg`,
]);

export default function TwinButton({
  variant = "primary",
  isSmall,
  children,
}: ButtonProps) {
  return (
    <Button variant={variant} isSmall={isSmall}>
      {children}
    </Button>
  );
}
