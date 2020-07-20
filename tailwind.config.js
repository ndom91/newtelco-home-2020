module.exports = {
  theme: {
    extend: {
      width: {
        '50-screen': '50vw',
        '40-screen': '40vw',
        '76': '20rem',
      },
      inset: {
        '-2': '-2rem',
        '1/2': '-50%',
        '250': '250px',
      },
      opacity: {
        '10': '.1',
      },
      rotate: {
        '5': '5deg',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(103, 178, 70, 0.5)',
        outline: '0 0 0 3px rgba(103, 178, 70, 0.5)',
      },
      colors: {
        green: {
          100: '#edfbd8',
          200: '#cff096',
          300: '#b3d77d',
          400: '#90b861',
          500: '#67b246',
          600: '#337429',
          700: '#13502b',
          800: '#042f21',
          900: '#001411',
        },
        gray: {
          100: '#f6f6f6',
          200: '#e4e4e4',
          300: '#cbcbcb',
          400: '#ababab',
          500: '#898989',
          600: '#666666',
          700: '#454545',
          800: '#292929',
          900: '#111111',
        },
      },
    },
    fontFamily: {
      display: 'Libre Baskerville',
      body: 'Raleway',
    },
  },
  variants: {},
  plugins: [],
  purge: false,
}
