/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FA4A0C'
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px'
      },fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

