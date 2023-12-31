/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('assets/banner.svg')",
        'banner-md' : "url('assets/banner-md.svg')",
        'banner-sm' : "url('assets/banner-sm.svg')",

      },
      backgroundColor:{
        'custom-1': "#F8F301",
        'custom-2': "#D4A400",
      },
    
    },
  },
  plugins: [require("daisyui")],

};

