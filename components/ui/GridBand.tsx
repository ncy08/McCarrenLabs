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
        fullWidth ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      }`}
    >
      <div className={`grid grid-cols-12 gap-4 md:gap-6 ${className}`}>
        {children}
      </div>
    </Component>
  );
};

export default GridBand;
