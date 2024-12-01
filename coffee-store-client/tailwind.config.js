/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rancho:["Rancho", 'cursive']
      },
      colors: { 'custom-yellow': 'rgba(227, 181, 119, 1)', },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

