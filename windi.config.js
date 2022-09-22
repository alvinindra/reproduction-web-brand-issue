import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  plugins: [require('windicss/plugin/aspect-ratio'), typography()],
  theme: {
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6.25rem',
      },
    },
    colors: {
      ...colors,
      'primary-1': '#304560',
      'primary-2': '#315275',
      'primary-3': '#47556B',
      'primary-21': '#6F90AA',
      'primary-22': '#7E9CB5',
      'primary-23': '#8CA6BB',
      'danger-1': '#FF5B5B',
      netral: {
        10: '#FFFFFF',
        20: '#EBF0F4',
        30: '#E4E9EC',
        40: '#D8DCE0',
        50: '#BABEC1',
        60: '#989B9E',
        70: '#717375',
        80: '#5D5F61',
        90: '#3D3F40',
        100: '#0A0A0A'
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'h1': ['3rem', '62.4px'],
      'h2': ['2.5rem', '52px'],
      'h3': ['2rem', '41.6px'],
      'h4': ['1.5rem', '33.6px'],
      'h5': ['1.25rem', '28px'],
      'h6': ['1rem', '22.4px'],
      'body1': ['1rem', '22.4px'],
      'body2': ['0.875rem', '19.6px'],
      'body3': ['0.75rem', '16.8px'],
      'caption1': ['0.75rem', '16.8px'],
      'caption2': ['0.6875rem', '15.4px'],
      'caption3': ['0.625rem', '14px']
    },
  },
  shortcuts: {
    'main-body': 'px-30px py-41px min-h-89vh'
  }
})
