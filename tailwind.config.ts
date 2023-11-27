import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#303031',
        grey: '#999',
        greyLight: '#E9EBEF',
        light: '#F6F7F9',
        white: '#FFF',
        blue: '#405EFF',
      },   
    },
  },
  plugins: [],

  
}
export default config
