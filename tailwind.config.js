const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#4361ee',
      secondary: '#0e1726',
      accent: '#888ea8',
      logo: '#e0e6ed',
      search: 'rgba(81, 83, 101, 0.28)',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.blue,
    },
    fontFamily: {
      nunito: 'Nunito',
    },
    extend: {
      boxShadow: {
        '3xl': '0 10px 20px -10px rgba(37, 99, 235, 0.6)',
      },
      opacity: {
        15: '0.15',
      },
      fill: {
        login: 'rgba(27, 85, 226, 0.23921568627450981)',
      },
      spacing: {
        8.5: '2.125rem',
        12.5: '3.125rem',
        13.3: '3.3125rem',
        92.5: '23.125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
