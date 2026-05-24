/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        aurum: '#C9A84C',
        obsidian: '#0D0D0D',
        charcoal: '#1A1A1A',
        deepblack: '#111111',
        ecru: '#E8E4DC',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
}
