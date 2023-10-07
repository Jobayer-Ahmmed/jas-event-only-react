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
        xPadding: "80px"
      },
      fontFamily:{
        amita : "Amita",
      },
        
    },
  },
  plugins: [require("daisyui")],
}