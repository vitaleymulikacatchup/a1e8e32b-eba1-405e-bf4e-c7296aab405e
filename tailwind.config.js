/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'starbucks-green': '#00704A',
        'starbucks-red': '#D50032',
        'starbucks-cream': '#F7F7F7',
        'starbucks-dark-green': '#1E3932',
        'starbucks-light-green': '#D4E9E2'
      },
      fontFamily: {
        'sans': ['SoDo Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}