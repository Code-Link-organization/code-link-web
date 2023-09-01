/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'sm':'576px',
      'md':"768px",
      'lg':'992px',
      'xl':'1200px',
      '2xl':'1400px'
    },
    container: {
      center: true,

    },
    extend: {
            fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors:{
        'primary':'#D9C6A4',
        'secondary':'#FFFFFF',
        'customblack':'rgba(0,0,0,1)',
        'customgray':'rgba(139,139,139,1)',
        'custombg':'rgba(252,250,248,1)'
      },
            boxShadow: {
        'btnshadow': ' 0px 6px 15px 0px rgba(218, 218, 218, 0.5)',
        'inputshadow':' 0px 6px 20px 0px rgba(218, 218, 218, 0.3);'
      }
    },
  },
  plugins: [],
};
