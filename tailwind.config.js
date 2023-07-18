import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#163d3f',
        alternate: '#F8F7F5',
        dark: '#212121',
      },
      fontFamily: {
        heading: ['Lato', ...defaultTheme.fontFamily.sans],
        body: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
