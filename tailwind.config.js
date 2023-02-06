/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        redish: {
          500: "#d30584",
          700: "#b1026e"
        }
      }

    },
  },
  plugins: [],
}
