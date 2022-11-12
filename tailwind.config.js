/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tutePrimary: '#800080',
        tuteSecondary: 'rgba(128, 0, 128, 0.25)',
      },
      letterSpacing: {
        code: '1.5rem',
      }
    },
  },
  plugins: [require("daisyui")],
}
