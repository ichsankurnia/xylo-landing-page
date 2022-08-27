/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italian: ["italian", "sans-serif"],
        sohnebuch: ["Sohne-Buch", "sans-serif"],
        sohnekraftig: ["Sohne-Kraftig", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'orange': '#ff9900',
      },
    },
  },
  plugins: [],
}
