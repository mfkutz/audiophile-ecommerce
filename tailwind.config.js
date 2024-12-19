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
        "gray-btn": "#4C4C4C",
        "gray-circle": "#D8D8D8",
      },
      screens: {
        mk: "1110px",
        md: "800px",
        sp: "925px",
        sps: "470px",
        acc: "560px",
      },
    },
  },
  plugins: [],
};
