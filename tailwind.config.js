/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, inviting ocean blues (softer, less corporate)
        ocean: {
          50: '#f0f7f9',
          100: '#e1eff3',
          200: '#c3dfe7',
          300: '#94c5d4',
          400: '#5fa8bb',
          500: '#4a8fa3',
          600: '#3d7589',
          700: '#355e6f',
          800: '#2e4f5c',
          900: '#29424d',
        },
        // Warm cream/sand tones (main background colors)
        cream: {
          50: '#fdfcfa',
          100: '#faf8f5',  // Main background
          200: '#f5f1e8',  // Alternate background
          300: '#ede7db',
          400: '#dfd4c3',
          500: '#c9b89a',
          600: '#b39c7d',
          700: '#978064',
          800: '#7d6854',
          900: '#685646',
        },
        // Natural sandy beige (accents)
        sand: {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e3d8c8',
          300: '#d4c2a8',
          400: '#c5ab89',
          500: '#b8996e',
          600: '#a08060',
          700: '#856951',
          800: '#6d5746',
          900: '#5a493b',
        },
        // Warm earthy green (accents, less prominent)
        earth: {
          50: '#f4f7f4',
          100: '#e5ede6',
          200: '#ccdcce',
          300: '#a8c3ab',
          400: '#7da382',
          500: '#5d8763',
          600: '#486d4d',
          700: '#3a5840',
          800: '#304735',
          900: '#283b2c',
        },
        // Jungle green (alias for earth, but with brighter tones)
        jungle: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Soft purple/lavender for yoga/wellness elements
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
