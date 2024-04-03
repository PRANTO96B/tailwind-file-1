/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1320px"
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif' ],
      },
      backgroundColor:{
        'hbg':"#282828"
      },
      backgroundImage:{
        banbg:"url(./src/assets/Banner.png)"
      }
    },
  },
  plugins: [],
}
