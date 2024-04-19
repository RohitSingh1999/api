/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      custombp: { raw: "(max-height: 600px)" },
      custombp2: { raw: "(max-height: 470px)" },
    },
    colors: {
      'darkgray': '#141414',
      'purple': '#f3468e',
      'black': '#000000',
      'white': '#FFFFFF',
      'black':'#000000',
      'dimblack': '#151515',
      'gray':'#8B8B8B',
      'light-purple':'#f0ccec',
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    fontSize: {
      'h1': '8rem',    // 8rem = 128px  line-height:9rem = (130px) bold 
      'h2': '4rem',    // 4rem =  64px  line-height:5rem   (80px) bold 
      'h3': '2.5rem',  // 2.5rem =  40px  line-height= 3rem   (52px) bold 
      'h4': '2rem',    // 2rem =  32px  line-height:2.6rem   (41px) bold 
      'h5': '1.5rem',  // 1.5rem =  24px  line-height:1.9rem   (31px) bold 
      'h6': '1rem',    // 1rem =  16px  line-height:1.5rem   (24px) bold 
      'p':'1rem',      // 1rem =  16px  line-height:1.5rem   (24px) regular
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

