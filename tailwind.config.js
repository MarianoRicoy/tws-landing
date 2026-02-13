/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tws: {
          navy: '#123753', 
          hover: '#1A4B6E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}