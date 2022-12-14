/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
