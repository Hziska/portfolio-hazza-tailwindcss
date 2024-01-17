/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["index.html"],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
     colors:{
      'primary':'#14b8a6',
      'secondary':'#64748b',
      'dark':'#1e293b'
     },
     screens:{
      'xl':'1320'
     }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

