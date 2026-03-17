import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#C9A84C',
          ember: '#B35A2E',
          deep: '#0D0F14',
          surface: '#151821',
          card: '#1A1E2A',
          muted: '#8B8FA3',
          text: '#E2E4ED',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in': 'fadeIn 0.5s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
