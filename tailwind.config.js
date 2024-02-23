/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: '#FFDBBB',
        peachOrange: '#FFC099',
        blackSoft: '#1C1D1D',
        azureWhite: '#D5DCEE',
        shadowBlue: '#728BAD',
        electricBlue: '#576b86',
        wildBlue: '#A3B8D7',
        lightBlue: '#7ca8eb',
        darkRed: '#1E0C06',
        silver: '#d9d9d982',
      },
      fontFamily: {
        kyiv: ['Kyiv'],
      },
      dropShadow: {
        glow: [
          '0 0px 20px rgba(255,255, 255, 0.1)',
          '0 0px 55px rgba(255, 255,255, 0.1)',
        ],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
