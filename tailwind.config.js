/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  // purge: [
  //   './public/**/*.html',
  //   './**/*.{js,jsx,ts,tsx,vue}',
  // ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto-Slab', 'sans-serif'],
      },
      colors: {
        'custom-bg-1': '#2C2D32',
        'custom-bg-2': '#333439',
        'custom-text-1': '#E8E7EC',
        'custom-text-2': '#E5A94A',
      },
    },
  },
  plugins: [],
}