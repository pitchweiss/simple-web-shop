/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mostly-black": "#1c1c1c",
        "smoky-black": "#0d090a",
        "dark-purple": "#361f27",
        palatinate: "#521945",
        "dark-pink": "#912f56",
        "moderate-pink": "#b83b6d",
        "mint-cream": "#eaf2ef",
        "lime-green": "#53fcb9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "screen-xl": "1280px",
      },
    },
  },
  plugins: [],
};
