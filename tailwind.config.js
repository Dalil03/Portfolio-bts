/ @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
module.exports = {
  content: [
    "./pages//.{js,ts,jsx,tsx}",
    "./components/**/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}}
