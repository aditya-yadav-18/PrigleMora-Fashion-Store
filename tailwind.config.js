/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        soft: "#f7efe9",
        primary: "#c97b63",
      },
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
