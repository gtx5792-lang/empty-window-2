import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        pizza: "#ff8c1a",
        neon: "#39ff14",
        cream: "#f5f5f0",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        alexandria: ["var(--font-alexandria)", "sans-serif"],
        ibm: ["var(--font-ibm-arabic)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "light-leak":
          "conic-gradient(from 180deg at 50% 50%, rgba(255,140,26,0.15), transparent 40%, rgba(57,255,20,0.08), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 140, 26, 0.35)",
        "glow-sm": "0 0 20px rgba(255, 140, 26, 0.25)",
        neon: "0 0 24px rgba(57, 255, 20, 0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse-glow: "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
