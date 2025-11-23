/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#bae2fd',
          300: '#7ccdfd',
          400: '#36b8fa',
          500: '#0066cc', // Lighter accessible blue for buttons
          600: '#003366', // Deep Brand Blue
          700: '#002b56',
          800: '#002346',
          900: '#001a36',
        },
        accent: {
          400: '#ffe066',
          500: '#FFD700', // Gold
          600: '#e6c200',
        },
        dark: {
          900: '#0b1121', // Deep blue-black
          800: '#152036', // Deep blue-grey
          700: '#263550',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        arabic: ['Cairo', 'ui-sans-serif', 'system-ui'],
        headline: ['Oswald', 'Cairo', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
