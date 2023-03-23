/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b65c6',
        tertiary: '#0e1133',
      },
      lineHeight: {
        12: '1.2',
        13: '1.3',
        16: '1.6',
      },
    },

    screens: {
      xs: {max: '400px'},
      sm: {max: '600px'},
      md: {max: '990px'},

      minmd: '1700px',
      minlg: '2100px',
    },
    fontFamily: {
      IBMPlex : ['IBM Plex Sans', 'sans-serif'],
    }
  },
  plugins: [],
}
