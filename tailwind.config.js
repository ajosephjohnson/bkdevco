const defaultTheme = require('tailwindcss/defaultTheme');

// 0, 1, 2, ...100 values for background-opacity
// Note: this is used in the tob nav bar for fade effect
const backgroundOpacity = [...Array(101).keys()].reduce((res, num) => {
  res[num.toString()] = num > 0 ? (num / 100).toString() : '0';
  return res;
}, {});

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: Object.keys(backgroundOpacity).map(key => `bg-opacity-${key}`),
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'theme-primary-green': '#5D8A5C',
        'theme-light-green': '#508C4F',
      },
      fontFamily: {
        sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Bitter"', ...defaultTheme.fontFamily.serif],
      },
      transitionProperty: {
        'box-shadow': 'box-shadow',
      },
    },
    backgroundOpacity,
  },
  variants: {},
  plugins: [],
};
