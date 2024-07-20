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
      },
      boxShadow: {
        'equal-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.1)', // Example value
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