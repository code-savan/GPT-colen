/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit, Sans-Serif'],
        poppins: ['Poppins, sans-serif'],
        jost: ['Jost, sans-serif']
      }
    },
  },
  plugins: [],
};
