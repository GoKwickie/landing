/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        // One brand green, in steps. 500 is the bright accent, 600 is the
        // main button/section colour, 700 is hover and green text on white.
        brand: {
          50: '#EEF9F0',
          100: '#DDF3E1',
          500: '#38CB4E',
          600: '#2FA84A',
          700: '#23873B',
          DEFAULT: '#2FA84A',
          green: '#2FA84A',
          'green-dark': '#23873B',
          dark: '#0a0a0a',
        },
        ink: {
          DEFAULT: '#111111',
          muted: '#5B6170',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Every section uses `container`, so all page edges line up.
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          md: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 4px 16px rgba(16, 24, 40, 0.06)',
      },
    },
  },
  plugins: [],
}
