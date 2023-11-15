/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "Black": "#1E2832",
        "primaryBG": "#1E28320D"
      }
    },
  },
  plugins: [],
}

