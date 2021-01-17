const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,tx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blue-gray': colors.blueGray,
      gray: colors.coolGray,
      cyan: colors.cyan,
      'light-blue': colors.lightBlue,
      indigo: colors.indigo,
      black: colors.black,
      white: colors.white,
      orange: colors.orange,
      yellow: colors.yellow,
      red: colors.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
