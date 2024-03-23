/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navcolor: "#2F302C",
      },
    },
    screens: {
      phone: "340px",
    },
  },
  plugins: [],
};
