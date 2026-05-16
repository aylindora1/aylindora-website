/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        accent: {
          50:  '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
        },
        ink: '#0f0e17',
        cream: '#fffceb',
      },
      boxShadow: {
        'pop-sm':  '3px 3px 0 0 #0f0e17',
        'pop':     '6px 6px 0 0 #0f0e17',
        'pop-lg':  '10px 10px 0 0 #0f0e17',
        'pop-pink':   '6px 6px 0 0 #ec4899',
        'pop-amber':  '6px 6px 0 0 #f59e0b',
        'pop-emerald':'6px 6px 0 0 #10b981',
        'pop-sky':    '6px 6px 0 0 #0ea5e9',
        'pop-violet': '6px 6px 0 0 #8b5cf6',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%':  { 'background-position': '0% 50%' },
          '50%':        { 'background-position': '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':       { transform: 'translateY(-20px) rotate(8deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':       { transform: 'rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(244, 63, 94, 0.5)' },
          '50%':       { 'box-shadow': '0 0 30px 5px rgba(244, 63, 94, 0.3)' },
        },
        'marquee': {
          from: { transform: 'translateX(0%)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float-slow':     'float-slow 6s ease-in-out infinite',
        'wiggle':         'wiggle 3s ease-in-out infinite',
        'pulse-glow':     'pulse-glow 2.5s ease-in-out infinite',
        'marquee':        'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
