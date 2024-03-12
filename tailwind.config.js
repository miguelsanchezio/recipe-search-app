/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rozha: ["Rozha One", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        salmon: "#ec7357",
        almond: "#fdd692",
        sunshine: "#fbffb9",
        gold: "#e1ce7a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
