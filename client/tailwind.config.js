/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          'liColor' : "#d1d5db"
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          md:'2rem',
          sm: '1rem',
          lg: '1rem',
          xl: '2rem',
          '2xl': '6rem',
        },
        center:true,
      },
      background:{
        'searchBarImage' : 'url("https://dr.savee-cdn.com/things/5/f/257fdfeae6c7447fff17fb.webp")'
      }
    },
  },
  plugins: [],
}