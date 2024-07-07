/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto-Slab', 'sans-serif']
      },
      colors: {
        'custom-bg-1': '#2C2D32',
        'custom-bg-2': '#333439',
        'color-1': '#E8E7EC',
        'color-2': '#E5A94A',
      },
    },
  },
  plugins: [],
}