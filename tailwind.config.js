/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff4ec",
          100: "#ffe7d3",
          200: "#ffcaa5",
          300: "#ffa56d",
          400: "#ff7432",
          500: "#ff4e0a",
          600: "#ff3300", // #ff3300 main
          700: "#cc2002",
          800: "#a11b0b",
          900: "#82190c",
          950: "#460904",
        },
      },
    },
  },
  plugins: [],
};
