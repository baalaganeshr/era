/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        secondary: {
          DEFAULT: '#667eea',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
        },
        card: {
          bg: 'rgba(30, 30, 40, 0.5)',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'container': '1400px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-text': 'linear-gradient(135deg, #8B5CF6 0%, #667eea 100%)',
      },
    },
  },
  plugins: [],
}