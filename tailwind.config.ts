import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'empty-image': "url('/assets/backgrounds/bg-empty.webp')",
        'gradient-teal': 'radial-gradient(181.84% 156.49% at 3.28% 0%, #fff 0%, #cbfef7 100%)',
      },
      colors: {
        indigo: {
          100: '#F1EFFF',
          200: '#D8D2FF',
          300: '#B1A4FF',
          400: '#8A77FE',
          500: '#634AFE',
          600: '#3C1DFE',
          700: '#361AE5',
          800: '#3017CB',
          900: '#2713A5',
          1000: '#21108C',
        },
        aquamarine: {
          100: '#EAFEFC',
          200: '#CAFEF7',
          300: '#95FCF0',
          400: '#2BFAE1',
          500: '#20E5CE',
          600: '#14CDB7',
          700: '#09B6A1',
          800: '#059886',
          900: '#077367',
          1000: '#035E53',
        },
        magenta: {
          100: '#FFF0FC',
          200: '#FFDAF7',
          300: '#FFB6F0',
          400: '#FF91E8',
          500: '#FF6CE1',
          600: '#FF36D2',
          700: '#F500BB',
          800: '#E301AE',
          900: '#C50798',
          1000: '#920370',
        },
        yellow: {
          100: '#FFFCED',
          200: '#FFF8D2',
          300: '#FFF3B0',
          400: '#FFEC86',
          500: '#FFE86F',
          600: '#FCDD3A',
          700: '#F2C831',
          800: '#E1AB21',
          900: '#D69313',
          1000: '#C15D00',
        },
      },
      boxShadow: {
        aqua: '0px 0px 44px #2BFAE1',
      },
    },
  },
  plugins: [],
}
export default config
