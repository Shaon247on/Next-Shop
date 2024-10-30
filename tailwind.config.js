/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url('/gif/Banner.gif')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        cinzel:["var(--font-cinzel)"],
        open:["var(--font-open)"],
        bristol:["var(--font-bristol)"]
      },
      colors:{
        deep:"#4b281e",
        light:"#c4a99b",
        lighter:"#ede7e1"
      }
    },
  },
  plugins: [require('daisyui'),],
};
