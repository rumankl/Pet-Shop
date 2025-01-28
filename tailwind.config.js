/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'g': 'red'
      },
      gridTemplateColumns: {
        'auto-grid': 'repeat(auto-fit, minmax(300px, 1fr))'
      }

    },


    // colors: {
    //   'primary': '#C5705D'
    // },


    screens: {
      'm2xl': { 'max': '1536px' },
      'mxl': { 'max': '1280px' },
      'mlg': { 'max': '1024px' },
      'mmd': { 'max': '768px' },
      'msm': { 'max': '640px' },
    }
  },
  plugins: [],
});
