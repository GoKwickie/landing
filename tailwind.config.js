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
        // main button/section colour, 700 is hover and green text on light,
        // 950 is the deep green used for dark panels.
        brand: {
          50: '#EEF9F0',
          100: '#DDF3E1',
          200: '#B9E6C2',
          500: '#38CB4E',
          600: '#2FA84A',
          700: '#23873B',
          800: '#1B6A2E',
          900: '#13461F',
          950: '#0C2914',
          DEFAULT: '#2FA84A',
          green: '#2FA84A',
          'green-dark': '#23873B',
          dark: '#0a0a0a',
        },
        // Near-black and off-white, both tinted toward the brand green.
        ink: {
          DEFAULT: '#0F1A12',
          muted: '#56635A',
        },
        cream: '#F6F7F1',
        // Sharp accent, used sparingly: highlights, badges, one hover.
        accent: '#FFD23F',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"DM Sans"', 'system-ui', 'sans-serif'],
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
        card: '0 1px 2px rgba(15, 26, 18, 0.04), 0 4px 16px rgba(15, 26, 18, 0.06)',
        float: '0 18px 40px -16px rgba(15, 26, 18, 0.35)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 5s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
