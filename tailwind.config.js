import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.cyan,
        tertiary: colors.amber,
        quaternary: colors.rose,
        accent: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          subtle: 'rgba(13, 148, 136, 0.08)',
        },
        dark: {
          DEFAULT: '#101420',
          surface: '#101420',
        },
        slate: {
          DEFAULT: '#334155',
          muted: '#64748b',
          light: '#94a3b8',
        },
        light: {
          DEFAULT: '#e2e8f0',
          white: '#f8fafc',
        },
        strategy: {
          DEFAULT: '#d97706',
          light: 'rgba(217, 119, 6, 0.12)',
        },
        culture: {
          DEFAULT: '#0d9488',
          light: 'rgba(13, 148, 136, 0.12)',
        },
        conduct: {
          DEFAULT: '#e11d48',
          light: 'rgba(225, 29, 72, 0.10)',
        },
        competence: {
          DEFAULT: '#0891b2',
          light: 'rgba(8, 145, 178, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Mulish', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Mulish', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2.5rem',
        xl: '4rem',
        '2xl': '6rem',
        '3xl': '8rem',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
