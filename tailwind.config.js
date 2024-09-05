/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgColor: 'rgb(var(--color-bgColor) / <alpha-value>)',
        content: 'rgb(var(--color-content) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
