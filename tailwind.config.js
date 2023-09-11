/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary:'#0ea5e9',
        secondary:'#1e293b',
        dark:'#082f49'
      },
      screens: {
        'xl' : '1200px',
      },
    },
  },
  plugins: [],
};

