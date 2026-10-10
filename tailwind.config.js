/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#080808',
        surface: '#101010',
        elevated: '#151515',
        'surface-2': '#1A1A1A',
        ink: {
          primary: '#F5F5F2',
          secondary: '#A3A3A3',
          muted: '#686868',
        },
        technical: {
          lime: '#B7F397',
          'lime-dim': 'rgba(183, 243, 151, 0.12)',
          'lime-border': 'rgba(183, 243, 151, 0.28)',
          burgundy: '#8F1D2C',
          'burgundy-dim': 'rgba(143, 29, 44, 0.15)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          standard: 'rgba(255, 255, 255, 0.12)',
          strong: 'rgba(255, 255, 255, 0.22)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      letterSpacing: {
        widest: '0.15em',
        tightest: '-0.035em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
