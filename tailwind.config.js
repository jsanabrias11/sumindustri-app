/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'mont':['Montserrat', 'sans-serif'],
        'playfair':['Playfair Display', 'sans-serif']
      },
      colors: {
        dark: "#1b1b1b",
        primary: "#E86D14"
      },
      height: {
        calc80: 'calc(100vh - 80px)',
        calc136: 'calc(100vh - 136px)',
      },
    },
  },
  plugins: [],
}

