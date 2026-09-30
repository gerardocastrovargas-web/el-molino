/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#C1121F',
          600: '#BA181B',
          700: '#A40F18'
        },
        ivory: '#FAF9F6',
        cream: '#F5EFEB',
        coal: '#121212',
        ink: '#0D0D0D',
        gold: '#C89B5A'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(193,18,31,.15), 0 12px 34px rgba(193,18,31,.28)',
        card: '0 18px 55px rgba(20, 12, 8, .10)'
      }
    }
  },
  plugins: []
}
