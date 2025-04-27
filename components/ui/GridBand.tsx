import React from "react";

interface GridBandProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fullWidth?: boolean;
}

/**
 * GridBand - A reusable 12-column grid layout component
 * This component establishes consistent grid layout across the site
 * with proper spacing and responsiveness.
 *
 * Updated to match Site #2's exact grid specifications and spacing.
 */
export const GridBand: React.FC<GridBandProps> = ({
  children,
  className = "",
  as: Component = "section",
  fullWidth = false,
}) => {
  return (
    <Component
      className={`relative w-full ${
        fullWidth ? "" : "max-w-screen-xl mx-auto px-5 sm:px-6 lg:px-8"
      }`}
    >
      <div className={`grid grid-cols-12 gap-4 md:gap-5 lg:gap-6 ${className}`}>
        {children}
      </div>
    </Component>
  );
};

export default GridBand;
