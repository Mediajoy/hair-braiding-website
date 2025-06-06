
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Ensure background colors are explicitly defined
        'white': '#ffffff',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}
