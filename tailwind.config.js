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
      },
      fontFamily: {
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
      },
      spacing: {
        space: "0.5rem",
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
