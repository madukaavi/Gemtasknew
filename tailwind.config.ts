import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(220, 248, 239,0.4)',
        'custom-purple': 'rgb(254, 226, 248, 0.4)',
        
          'customPink': 'rgba(241, 39, 97, 1)',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
export default config;
