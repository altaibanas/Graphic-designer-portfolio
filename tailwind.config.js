/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdfbf2",
          100: "#fbf6e0",
          200: "#f5eac0",
          300: "#edd895",
          400: "#e0c060",
          500: "#d4af37", // Primary Gold Accent
          600: "#c5a028", // Classic Rich Gold
          700: "#9a7b1c", // Deep Gold
          800: "#7b6118",
          900: "#644f18",
          light: "#d4af37",
          dark: "#9a7b1c",
        },
        slate: {
          850: "#151e2e",
          900: "#0f172a",
          950: "#080d1a",
        },
        night: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          700: "#1e293b",
          800: "#111827",
          850: "#0e1422",
          900: "#0a0e17",
          950: "#06090e",
        },
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["var(--font-family)", "Cairo", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(212, 175, 55, 0.3)",
        "glow-lg": "0 0 40px -8px rgba(212, 175, 55, 0.45)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "spin-slow": "rotateConic 14s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        floating: "floating 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
