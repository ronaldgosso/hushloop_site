/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06080c',
          900: '#090d12',
          850: '#0d1117',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
        },
        cyan: {
          400: '#4eedde',
          500: '#00f2fe',
          600: '#00c7d4',
        },
        coral: {
          400: '#ff6b8b',
          500: '#ff4b72',
          600: '#e03259',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -3px rgba(0, 242, 254, 0.4)',
        'glow-coral': '0 0 25px -3px rgba(255, 75, 114, 0.4)',
      },
    },
  },
  plugins: [],
}
