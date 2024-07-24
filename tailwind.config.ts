import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      screens: {
        'mobile-320': {'max': '320px'},
      },
      colors: {
        'custom-blue': 'rgb(220, 248, 239,0.4)',
        'custom-purple': 'rgb(254, 226, 248, 0.4)',
          'customPink': 'rgba(241, 39, 97, 1)',
          'custompinknew':'rgba(116, 14, 76, 1)',
          'custompinkpr':'rgba(181, 2, 111, 1)',
          'cardoverlay':'rgba(255, 255, 255, 0.1)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F12761 -100.67%, #740E4C 161.17%)',
      },
      
    },
  },
  plugins: [
    
  ],
};
export default config;
