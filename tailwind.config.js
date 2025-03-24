/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bg: '#121212',
        bgItem: '#1E1E1E',
        textFaded: '#575353',
        accent: '#B2860C',
      },
    },
  },
  plugins: [],
};
