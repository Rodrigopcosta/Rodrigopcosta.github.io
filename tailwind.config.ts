import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#080b10',
        'dark-bg2': '#0c1018',
        'dark-bg3': '#111827',
        'accent': '#39ff7e',
        'accent2': '#ff6b35',
        'accent3': '#7c6dfa',
        'text-primary': '#e8eaf0',
        'text-dim': '#6b7280',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundColor: {
        'dark': 'var(--bg)',
        'dark-2': 'var(--bg2)',
        'dark-3': 'var(--bg3)',
      },
      borderColor: {
        'dark-border': 'var(--border)',
      },
      textColor: {
        'dim': 'var(--txt-dim)',
        'primary': 'var(--txt)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        blink: 'blink 0.9s step-end infinite',
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-24px) scale(1.04)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(57, 255, 126, 0.4)' },
          '50%': { boxShadow: '0 0 0 5px rgba(57, 255, 126, 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
