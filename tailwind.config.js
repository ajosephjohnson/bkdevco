const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#628b61',
      },
      fontFamily: {
        sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Bitter"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
