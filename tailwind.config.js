/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981", // Emerald 500
          hover: "#059669", // Emerald 600
        },
        secondary: "#047857", // Emerald 700
        dark: {
          DEFAULT: "#020617", // Slate 950
          lighter: "#0f172a", // Slate 900
          card: "#1e293b", // Slate 800
        },
        accent: "#34d399", // Emerald 400
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
