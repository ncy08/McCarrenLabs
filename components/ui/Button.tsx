import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  ...rest
}: ButtonProps) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center transition-colors duration-200 font-medium rounded-md";

  // Variant styles
  const variantStyles = {
    primary: "bg-orange text-white hover:bg-opacity-90",
    secondary: "bg-black text-white hover:bg-opacity-90",
    outline: "border border-black text-black hover:bg-black/5",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm py-2 px-4",
    md: "py-3 px-6",
    lg: "text-lg py-4 px-8",
  };

  // Combined styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render as a link
  if (href) {
    return (
      <Link
        href={href}
        className={buttonStyles}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
