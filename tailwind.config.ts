import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Identity — Primary Blue
        primary: {
          50: '#EDF6FD',
          100: '#D6ECFA',
          200: '#A4D2F0',
          300: '#6FB3E3',
          400: '#3A93D5',
          500: '#1678C2',
          600: '#1264A5',
          700: '#0E5089',
          800: '#0A3D6B',
          900: '#062A4A',
        },
        // Brand Identity — Accent Teal
        teal: {
          50: '#E8FBF8',
          100: '#CCF6F0',
          200: '#99ECE2',
          300: '#66DFD0',
          400: '#2ECDB8',
          500: '#00B49E',
          600: '#009985',
          700: '#007A6A',
          800: '#005C50',
          900: '#003D36',
        },
        // Brand Identity — Neutral Slate
        slate: {
          50: '#F2F4F8',
          100: '#E0E4ED',
          200: '#BCC3D4',
          300: '#939DB5',
          400: '#6B7899',
          500: '#4E5D80',
          600: '#3A4768',
          700: '#283352',
          800: '#1A2240',
          900: '#0F1629',
        },
        // Brand Identity — Support Colors
        coral: {
          100: '#FBE0DA',
          300: '#F2A596',
          400: '#ED8470',
          500: '#E8634A',
        },
        amber: {
          100: '#FDF2D6',
          400: '#F0BA42',
          500: '#E8A317',
        },
        success: '#0AAF6A',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Brand Identity — Escala Tipográfica
        'display': ['2.375rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['1.625rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '700' }],
        'h4': ['0.9375rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
        'body': ['0.9375rem', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'caption': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '500' }],
        'overline': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      borderRadius: {
        'card': '14px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 20px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'elevated': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
