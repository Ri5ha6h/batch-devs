module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 20px -10px rgba(37, 99, 235, 0.6)',
      },
      fill: {
        login: 'rgba(27, 85, 226, 0.23921568627450981)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
