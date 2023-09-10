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
        primary: '#00B0F0',
        primary_light: '#E6F7FE',
      },
    },
  },
  plugins: [],
}
export default config
