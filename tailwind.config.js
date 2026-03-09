/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cheetah: {
          gold: '#F5A623',
          amber: '#E07B00',
          dark: '#1A1208',
          spot: '#2D1F00',
          cream: '#FFFCE8',
          tan: '#C4862A',
          light: '#FFF4CC',
          black: '#0D0A03',
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
