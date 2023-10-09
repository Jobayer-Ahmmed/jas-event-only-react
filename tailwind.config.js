/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        priColor: '#FF5733',

      },
      spacing: {            
        width: "1200px",
        xPadding:"30px"
      },
      fontFamily:{
        amita : "Amita",
      },
        
    },
  },
  plugins: [require("daisyui")],
}