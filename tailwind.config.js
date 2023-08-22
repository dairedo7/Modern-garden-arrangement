/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      sm_xl: '680px',
      md: '768px',
      lg: '1024px',
      lg_xl: '1200px',
      xl: '1440px',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      colors: {
        primary: '#000000',
        secondary: '#F5F0EC',
        additional: '#1B5B31',
      },
      maxWidth: {
        1440: '1440PX',
      },
      fontFamily: {
        inter: ['Inter', 'Montserrat', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      boxShadow: {
        subtleGray: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
        subtleInnerGray: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
        borderBlack: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;',
      },

      gridTemplateColumns: {
        379: '50px 65px 65px 55px 91px 154px',
      },
    },
  },

  plugins: [],
};
