/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#f1f4f9",
        primary: "#1a1d22",
      },
    },
  },
  plugins: [],
};
