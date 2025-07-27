/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'earth-brown': '#6B4226',
        'savannah-green': '#789262',
        'warm-sand': '#F6F2E9',
        'sky-blue': '#4A90E2',
        'charcoal-gray': '#333333',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};