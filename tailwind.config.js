/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#ee6c4e',
      },
      fontFamily: {
        primary: 'Shantell Sans',
        secondry: 'Roboto Mono',
      },
    },
  },
  plugins: [],
};
