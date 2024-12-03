/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Roboto", "Arial", "sans-serif"], // Add preferred fonts
      },
    },
  },
  plugins: [],
};
