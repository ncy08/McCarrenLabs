/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        fog: "#E5E5E5",
        sesame: {
          primary: "var(--sesame-primary)",
          accent: "var(--sesame-accent)",
          mute: "var(--sesame-bg)",
        },
        black: "#0A0A0A",
        white: "#FFFFFF",
        neutral: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
        },
        ink: "#111111",
        light1: "rgb(var(--color-light-1))",
        light2: "rgb(var(--color-light-2))",
        light3: "rgb(var(--color-light-3))",
        green1: "rgb(var(--color-green-1))",
        green2: "rgb(var(--color-green-2))",
        green3: "rgb(var(--color-green-3))",
        green4: "rgb(var(--color-green-4))",
        green5: "rgb(var(--color-green-5))",
        green6: "rgb(var(--color-green-6))",
        green7: "rgb(var(--color-green-7))",
        main: "rgb(var(--color-main-text))",
        secondary: "rgba(var(--color-main-text), 0.7)",
        tertiary: "rgba(var(--color-main-text), 0.6)",
      },
      borderColor: {
        subtle: "#EEEEEE",
        normal: "rgb(var(--color-gray-1))",
        secondary: "rgba(var(--color-main-text), 0.7)",
      },
      ringColor: {
        ink: "#111111",
      },
      fontFamily: {
        sans: ["Season VF Sans", "var(--font-season)", "serif"],
        inter: ["Inter", "sans-serif"],
        season: ["Season VF Sans", "var(--font-season)", "serif"],
        seasons: ["Season VF Sans", "var(--font-season)", "serif"],
        mono: ["Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        "display-1": [
          "4.5rem",
          { lineHeight: "1.05", fontWeight: "600", letterSpacing: "-0.02em" },
        ],
        "heading-2": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.2", fontWeight: "400" }],
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
          { lineHeight: "1.2", fontWeight: "400" },
        ],
        sidebar: [
          "1.125rem",
          { lineHeight: "135%", fontWeight: "630", letterSpacing: "0.035em" },
        ],
        "sidebar-light": [
          "1.125rem",
          { lineHeight: "135%", fontWeight: "502", letterSpacing: "0.035em" },
        ],
        button: [
          "0.93rem",
          { lineHeight: "120%", fontWeight: "530", letterSpacing: "0.035em" },
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
        sm: "640px",
        md: "768px",
        mdlg: "900px",
        lg: "1024px",
        lglx: "1140px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
