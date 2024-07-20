/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter : ['Inter', 'sans-serif'],
      },
      colors: {
        "cyan": "#005377",
        "textLight": "#63676B",
        "fullGreen": "#06A77D"
      }
    
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-gradient': {
          borderImage: 'linear-gradient(90deg, #F1A208, #06A77D) 1',
          borderRadius: '12px',
        },
      })
    },
  ],
}