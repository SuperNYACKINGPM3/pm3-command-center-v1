import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        "bg-elevated": "rgb(var(--bg-elevated) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        ink: {
          950: "#07070A",
          900: "#0A0A0D",
          850: "#0E0E12",
          800: "#131317",
          700: "#1B1B21",
          600: "#26262E",
          500: "#3A3A45",
        },
        paper: {
          50: "#FAFAF8",
          100: "#F3F2EE",
          200: "#E7E5DD",
        },
        gold: {
          50: "#FBF3DE",
          100: "#F6E6B8",
          200: "#EED27F",
          300: "#E4BC55",
          400: "#D4AF37",
          500: "#C9A227",
          600: "#B8860B",
          700: "#8F6A0C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F6E6B8 0%, #D4AF37 45%, #8F6A0C 100%)",
        "gold-gradient-soft": "linear-gradient(135deg, #EED27F 0%, #C9A227 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(212,175,55,0.14) 0%, rgba(7,7,10,0) 70%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,175,55,0.15), 0 8px 40px -8px rgba(212,175,55,0.25)",
        "glow-lg": "0 0 0 1px rgba(212,175,55,0.2), 0 20px 80px -16px rgba(212,175,55,0.35)",
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 32px -8px rgba(0,0,0,0.5)",
      },
      animation: {
        "gradient-x": "gradient-x 12s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundSize: {
        "gradient-200": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
