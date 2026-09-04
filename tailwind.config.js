/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#06487A',
          secondary: '#0B5A94',
          deep: '#043A62',
          accent: '#3B82F6',
          light: '#60A5FA',
          muted: '#A8BFCC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ecg-draw': 'ecgDraw 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'count-up': 'countUp 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'flow-right': 'flowRight 2s linear infinite',
        'marquee': 'marquee 32s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.12)', opacity: '0' },
        },
        ecgDraw: {
          '0%': { strokeDashoffset: '1000' },
          '50%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-1000' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flowRight: {
          '0%': { strokeDashoffset: '20' },
          '100%': { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #06487A 0%, #054270 50%, #043A62 100%)',
        'section-gradient': 'linear-gradient(180deg, #0B5A94 0%, #06487A 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'card': '0 8px 48px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.06) inset',
        'card-hover': '0 16px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.15)',
        'glow-blue': '0 0 40px rgba(59,130,246,0.2)',
        'nav': '0 4px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
