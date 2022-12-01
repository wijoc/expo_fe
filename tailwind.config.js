module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,vue}'
  ],
  theme: {
    container: {
      center: true,
      padding: '0.5em'
    },
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      fontSize: {
        '4.5xl': '2.75em'
      },
      colors: {
        primary: '#ef476f',
        darkerprimary: '#c13a59',
        secondary: '#118ab2'
      },
      letterSpacing: {
        xtrawide: '0.15em',
        superwide: '0.2em'
      },
      lineHeight: {
        '55': '5.5em'
      },
      spacing: {
        '128': '32em'
      },
      screens: {
        '2xl': '1320px'
      },
      transitionProperty: {
        'maxheight': 'max-height'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideY: {
          '0%': { transform: 'translateY(-3rem)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out normal',
        fadeOut: 'fadeIn 0.5s ease-in-out reverse',
        slideDown: 'slideY 0.75s ease-in-out normal',
        slideUp: 'slideY 0.75s ease-in-out reverse'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '9': '9px',
      '11': '11px',
      '12': '12px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
