/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('assets/banner.svg')",
        'banner-md' : "url('assets/banner-md.svg')",
        'banner-sm' : "url('assets/banner-sm.svg')",
        'ban-new' : "url('assets/ban.png')",
        'ban-new-sm': "url('assets/ban-sm.png')",
        'ban-new-md': "url('assets/ban-md.png')"
<<<<<<< HEAD
=======

>>>>>>> 8d3d18e46cc6463c7b86702942086fcb87f6c00c
      },
      backgroundColor:{
        'custom-1': "#F8F301",
        'custom-2': "#D4A400",
<<<<<<< HEAD
        'custom-3':"#E0ECEA"
      },
      colors:{
        'cust': "#193268"
=======
        'custom-3': "#E0ECEA"
      },
      colors:{
        'cust':"#193268"
>>>>>>> 8d3d18e46cc6463c7b86702942086fcb87f6c00c
      }
    
    },
  },
  plugins: [require("daisyui")],

};

