/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "90rem",
      },
      fontFamily: {
        sans: ["Roboto", "arial"],
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
