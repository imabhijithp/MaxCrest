/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloud: '#FFFFFF',
        tea: {
          DEFAULT: '#294E35',
          deep: '#1E3A27',
          dark: '#14271A',
          hover: '#22422C',
        },
        'young-tea': '#EAF1E6',
        sage: {
          DEFAULT: '#B8C9B2',
          light: '#D3DFCF',
          dark: '#9CB096',
        },
        amber: {
          DEFAULT: '#BB8C52',
          tea: '#BB8C52',
          light: '#CE9E64',
        },
        ivory: {
          DEFAULT: '#FFFFFF',
          light: '#FDFCFB',
        },
        stone: {
          cream: '#EAF1E6',
          muted: '#B8C9B2',
          border: '#B8C9B2',
        },
        charcoal: {
          DEFAULT: '#14271A',
          deep: '#0F1E14',
          soft: '#1E3A27',
        },
        olive: {
          highland: '#294E35',
          muted: '#415A47',
        },
        bronze: {
          warm: '#BB8C52',
          light: '#CE9E64',
        },
        slate: {
          muted: '#617364',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
        widest: '0.22em',
        loose: '0.12em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
