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
        black: "#0B0B0C",
        white: "#FFFFFF",
        orange: "#FF7A00",
        gray: "#A0A0A0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-m": ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-m": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        72: "72px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        default: "0 8px 16px rgba(0,0,0,.15)",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      maxWidth: {
        container: "1200px",
      },
      height: {
        hero: "90vh",
      },
    },
  },
  plugins: [],
};
