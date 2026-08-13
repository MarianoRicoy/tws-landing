/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0D1934', // Fondo base de la web
        },
        surface: {
          dark: '#010001', // Contenedores de tarjetas, modales, inputs
        },
        accent: {
          cyan: '#3A82F6', // Botones primarios, gradientes, separadores
          glow: '#3673ED', // Únicamente para efectos de resplandor (blur)
        },
        muted: {
          white: 'rgba(255, 255, 255, 0.60)', // Párrafos, descripciones, links secundarios
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }
  },
  plugins: [],
};

export default config;