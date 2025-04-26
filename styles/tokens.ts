/**
 * Design System Tokens for Sesame AI Marketing Site
 * Based on PRD v1.2 specifications
 */

export const colors = {
  black: "#0B0B0C",
  white: "#FFFFFF",
  orange: "#FF7A00",
  gray: "#A0A0A0",
};

export const typography = {
  fontFamily: {
    primary: "Inter, sans-serif",
  },
  sizes: {
    displayXL: {
      size: "4rem", // 64px
      lineHeight: 1.2,
      weight: 700,
    },
    headingM: {
      size: "2.25rem", // 36px
      lineHeight: 1.3,
      weight: 600,
    },
    bodyM: {
      size: "1rem", // 16px
      lineHeight: 1.5,
      weight: 400,
    },
  },
};

export const spacing = {
  grid: {
    columns: 12,
    maxWidth: "1200px",
    gutter: "72px",
  },
  scale: {
    0: "0",
    1: "4px", // 0.25rem
    2: "8px", // 0.5rem
    3: "12px", // 0.75rem
    4: "16px", // 1rem
    5: "20px", // 1.25rem
    6: "24px", // 1.5rem
    8: "32px", // 2rem
    10: "40px", // 2.5rem
    12: "48px", // 3rem
    16: "64px", // 4rem
    18: "72px", // 4.5rem
    20: "80px", // 5rem
    24: "96px", // 6rem
    32: "128px", // 8rem
  },
};

export const radii = {
  sm: "4px",
  md: "8px",
};

export const shadows = {
  default: "0 8px 16px rgba(0,0,0,.15)",
};

export const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "1024px",
  lg: "1280px",
};

export const components = {
  hero: {
    height: "90vh",
    mobileHeight: "70vh",
  },
  goalCard: {
    badgeSize: "72px",
  },
  rosterAvatar: {
    size: "240px",
  },
  headerHeight: {
    desktop: "24px",
    mobile: "12px",
  },
  headerBlur: "8px",
};

export const animation = {
  scrollReveal: {
    rootMargin: "-25%",
    duration: "400ms",
    stagger: "60ms",
  },
  navUnderline: {
    duration: "180ms",
    color: colors.orange,
  },
  focusRing: {
    width: "3px",
    color: colors.orange,
  },
};
