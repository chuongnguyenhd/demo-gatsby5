/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#B9471B',
          800: '#D35321',
          700: '#E15A24',
          600: '#EF6129',
          500: '#FA672D',
          400: '#FA7C4B',
          300: '#FB936C',
          200: '#FCB196',
          100: '#FDCFBF',
          50: '#FAEAE8',
        },
        gray: {
          shadow: '#F7F7F7',
          50: '#FAFAFA',
          100: '#F3F3F3',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#A9A29D',
          500: '#79716B',
          700: '#44403c',
          800: '#292524',
          900: '#1B1B1B',
        },
        error: {
          900: '#7A271A',
          800: '#912018',
          700: '#B42318',
          600: '#D92D20',
          500: '#F04438',
          400: '#F97066',
          300: '#FDA29B',
          200: '#FECDCA',
          100: '#FEE4E2',
          50: '#FEF3F2',
        },
        success: {
          900: '#074D31',
          800: '#085D3A',
          700: '#067647',
          600: '#079455',
          500: '#17B26A',
          400: '#47CD89',
          300: '#75E0A7',
          200: '#ABEFC6',
          100: '#DCFAE6',
          50: '#ECFDF3',
        },
        variant: {
          100: '#F7DBD0',
          200: '#F9C0AB',
          300: '#F6A181',
          400: '#F38158',
          500: '#F0622E',
        },
        warning: {
          900: '#7A2E0E',
          800: '#93370D',
          700: '#B54708',
          600: '#DC6803',
          500: '#F79009',
          400: '#FDB022',
          300: '#FEC84B',
          200: '#FEDF89',
          100: '#FEF0C7',
          50: '#FFFAEB',
        },
        blue: {
          100: '#DBEAFE',
          200: '#F0F9FF',
          500: '#026AA2',
          700: '#1D4ED8',
        },
      },
      height: () => ({
        content: 'var(--content-height)',
      }),
      maxWidth: () => ({
        appFull: 'var(--app-max-width)',
      }),
      maxHeight: () => ({
        footer: 'var(--footer-height)',
        header: 'var(--header-height)',
      }),
    },
  },
  plugins: [],
};
