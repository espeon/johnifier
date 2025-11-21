/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a1628',
        surface: '#132238',
        'surface-elevated': '#1a2f4a',
        primary: {
          DEFAULT: '#e07856',
          light: '#f5a686',
          dark: '#c85a38',
        },
        secondary: '#f4e4d7',
        accent: {
          DEFAULT: '#ffd89b',
          alt: '#19d3da',
        },
        text: {
          primary: '#f9f4ef',
          secondary: '#c4b5a0',
          muted: '#8b8174',
        },
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body: ['Crimson Pro', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out 0.2s forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        fadeIn: {
          'to': { opacity: '1' },
        },
        slideDown: {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          'to': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}
