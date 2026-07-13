/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        champagne: '#F3E5AB',
        rose: {
          50: '#FFF0F3',
          100: '#FFD6DE',
          200: '#FFB3C1',
          300: '#FF8FA3',
          400: '#FF6B85',
          500: '#FF4D6D',
          600: '#E83A5F',
          700: '#C42A4A',
        },
        gold: {
          100: '#FFF8E1',
          200: '#FFECB3',
          300: '#FFE082',
          400: '#FFD54F',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
        },
        midnight: {
          50: '#E8EAF6',
          100: '#C5CAE9',
          200: '#9FA8DA',
          300: '#7986CB',
          400: '#5C6BC0',
          500: '#3F51B5',
          600: '#3949AB',
          700: '#303F9F',
          800: '#283593',
          900: '#1A237E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite 1s',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'rotate-slow': 'rotate 20s linear infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 193, 7, 0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(255, 193, 7, 0.6)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
