/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#1A1A2E',
          900: '#252541',
          800: '#3A3A5C',
          700: '#4A4A7C',
          600: '#5A5A9C',
          light: '#2A3F7F',
        },
        accent: {
          DEFAULT: '#2537A8',
          light: '#6B8FFF',
          dark: '#272E5C',
          softer: '#5C7FDB',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F0F0F0',
          200: '#E5E5E5',
          300: '#D0D0D0',
          400: '#A0A0A0',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#202020',
          900: '#0F0F0F',
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'spin-slow': 'spin-slow 8s linear infinite',
        'blur-in': 'blur-in 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'slide-left': 'slide-left 0.6s ease-out',
        'slide-right': 'slide-right 0.6s ease-out',
        'rotate-in': 'rotate-in 0.6s ease-out',
        'bounce-in': 'bounce-in 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float-up': 'float-up 4s ease-in-out infinite',
        'float-down': 'float-down 4s ease-in-out infinite',
        'sway': 'sway 3s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s linear infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'stagger-1': 'slide-up 0.6s ease-out 0.1s both',
        'stagger-2': 'slide-up 0.6s ease-out 0.2s both',
        'stagger-3': 'slide-up 0.6s ease-out 0.3s both',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 55, 168, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 55, 168, 0.6)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'blur-in': {
          'from': { opacity: '0', filter: 'blur(10px)' },
          'to': { opacity: '1', filter: 'blur(0)' },
        },
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'rotate-in': {
          'from': { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
          'to': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        'ping-slow': {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-down': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
        'neon-glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(37, 55, 168, 0.5), 0 0 20px rgba(37, 55, 168, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(37, 55, 168, 0.8), 0 0 40px rgba(37, 55, 168, 0.6), 0 0 60px rgba(37, 55, 168, 0.4)'
          },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(37, 55, 168, 0.3)' },
          '50%': { borderColor: 'rgba(37, 55, 168, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
