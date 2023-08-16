/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // sm: '414px',
      sm: '480px',
      sm_xl: '680px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#F5F0EC',
      },
      maxWidth: {
        920: '920PX',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      boxShadow: {
        darkWhite: '',
      },

      gridTemplateColumns: {
        240: '240px auto',
      },
    },
  },
  plugins: [],
};
