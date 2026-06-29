import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B263A",
          deep: "#081C2C",
          900: "#0B263A",
          800: "#0E2E47",
          700: "#103B57",
          600: "#15496B",
        },
        coastal: {
          DEFAULT: "#4FA3C7",
          light: "#6FB9D8",
          50: "#EAF6FB",
        },
        ice: {
          DEFAULT: "#BFEAF5",
          soft: "#DCF2F9",
        },
        ink: "#102A3C",
        mist: "#F5F8FA",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px -15px rgba(79, 163, 199, 0.35)",
        card: "0 18px 50px -20px rgba(11, 38, 58, 0.45)",
        soft: "0 10px 40px -18px rgba(16, 42, 60, 0.25)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #081C2C 0%, #0B263A 45%, #103B57 100%)",
        "coastal-gradient":
          "linear-gradient(135deg, #103B57 0%, #4FA3C7 100%)",
        "ice-gradient": "linear-gradient(135deg, #BFEAF5 0%, #4FA3C7 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
