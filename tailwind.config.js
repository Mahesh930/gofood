/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#3333cc",
        "red": "#e60000",
        "secondary": "#555",
        "primary": "#f2f2f2",
      },
      fontFamily: {
        "primary": ["Public Sans", "sans-serif"],
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}