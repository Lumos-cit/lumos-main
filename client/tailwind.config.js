/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-lg' : "url('/Assets/Images/MainHead.jpg')",
      },
      backgroundColor:{
        'custom-1': "#F8F301",
        'custom-2': "#D4A400",
      },
    
    },
  },
  plugins: [require("daisyui")],

};
