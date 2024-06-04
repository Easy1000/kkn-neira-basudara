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
        'hero': "url('/src/public/assets/images/bg-hero.png')",
        'konten-interaktif-mobile': "url(/public/images/landing-page/konten-interaktif/Group 132.png)"
      },
      fontFamily: {
        'reikna': ['Reikna'],
        'manjari': ['Manjari'],
        'libre-franklin': ['Libre Franklin'],
      },
      colors: {
        'c-yellow': '#FAB874',
        'c-green': '#629A9D',
        'c-green-dark': '#113B3E',
      },
    },
  },
  plugins: [
    
  ],
};
