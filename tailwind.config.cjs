module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  media: false,
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
  variants: {
    extend: {},
  },
  plugins: [],
}