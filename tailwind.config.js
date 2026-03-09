/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009FA0",
        "background-dark": "#1A2B2E",
        "surface-dark": "#24373a",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 159, 160, 0.35)",
      },
    },
  },
  plugins: [],
};
