/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFD21D',
        'primary-dark': '#E9BB00',
        'primary-light': '#FFE683',
        'blue-accent': '#16B9FF',
        'red-negative': '#FF4F60',
        'yello-warning': '#FFD12B',
        'green-positive': '#73EF5F',
        'gray-900': '#090909',
        'gray-600': '#6F6F6F',
        'gray-500': '#A2A2A2' ,
        'gray-300': '#D5D5D5' ,
        'gray-100': '#EEEEEE' ,
        'gray-50': '#F5F5F5' ,
        'gray-0': '#FFFFFF',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif']
      },
      maxWidth: {
        '1/7': 1/7
      }
    },
  },
  plugins: [],
}