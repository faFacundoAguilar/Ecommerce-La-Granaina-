/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'], 
        playwrite: ['Playwrite CU', 'sans-serif'], 
        anton: ['Anton', 'sans-serif'], 
        caveat: ['Caveat', 'cursive'], 
        ubuntu: ['Ubuntu', 'sans-serif'],
        timmana: ['Timmana', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animated'),
  ],
};
