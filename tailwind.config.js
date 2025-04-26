/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        white: "#FFFFFF",
        accent: "#0066FF",
        neutral: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
        },
        ink: "#0A0A0A",
        light1: "#FFFFFF",
      },
      borderColor: {
        subtle: "#EEEEEE",
      },
      ringColor: {
        ink: "#0A0A0A",
      },
      fontFamily: {
        sans: [
          "Season",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        inter: ["Inter", "sans-serif"],
        mono: ["Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        "display-1": [
          "4.5rem",
          { lineHeight: "1.05", fontWeight: "600", letterSpacing: "-0.02em" },
        ],
        "heading-2": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }],
        h1: [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.05", fontWeight: "600" },
        ],
        h2: [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        body: [
          "clamp(1rem, 1.2vw, 1.25rem)",
          { lineHeight: "1.5", fontWeight: "400" },
        ],
      },
      spacing: {
        space: "0.5rem",
        s6: "0.375rem", // 6px
        s8: "0.5rem", // 8px
        s12: "0.75rem", // 12px
        s16: "1rem", // 16px
        s24: "1.5rem", // 24px
        s32: "2rem", // 32px
        s40: "2.5rem", // 40px
        s48: "3rem", // 48px
        s64: "4rem", // 64px
        s80: "5rem", // 80px
        s96: "6rem", // 96px
        s128: "8rem", // 128px
        s160: "10rem", // 160px
        s200: "12.5rem", // 200px
      },
      borderRadius: {
        DEFAULT: "8px",
        "2xl": "16px",
        "3xl": "24px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
