import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#FFFDFD',
        gray_1: '#6F6F6F',
        gray_2: '#FBFAFA',
        gray_4: '#494747',
        gray_5: '#E0E0E0',
        gray_6: '#717171',
        gray_7: '#313536',
        gray_8: '#F1F0F0',
        gray_9: '#989393',
        primary: '#00B0F0',
        primary_1: '#008ABD',
        primary_light: '#E6F7FE',
        secondary: '#C51414',
        footer_bg: '#1D0202',
      },
    },
  },
  plugins: [],
}
export default config
