/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "more-ec": "#D87D4A",
        "black-ec": "#141414",
        "white-ec": "#F1F1F1",
        "trans-ec": "#FAFAFA",
        "more-cc": "#FBAF85",
        "black-cc": "#000000",
        "white-cc": "#FFFFFF",
        "black-esp": "#121212",
      },
      screens: {
        mk: "1110px",
      },
    },
  },
  plugins: [],
};
