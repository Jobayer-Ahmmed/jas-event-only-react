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

      },
      spacing: {            
        // lgWidth: "1100px",
      },
      // fontFamily:{
      //   amita : "Amita",
      // },
        
    },
  },
  plugins: [require("daisyui")],
}