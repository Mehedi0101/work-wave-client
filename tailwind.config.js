/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#6495ED',
        'lightDark': '#ffffffa8',
      },
    },
  },
  plugins: [require("daisyui")],
}