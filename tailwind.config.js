const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'theme-primary-green': '#628b61',
        'theme-light-green': '#eff3ef',
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
