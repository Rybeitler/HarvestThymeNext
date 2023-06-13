/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'grn':{
        100:'#d1dcbc',
        200:'#85a870',
        300:'#6F7B51',
      },
      'brn':{
        100:'#CFA98C',
        200:'#83827f',
        300:'#795E56',
        400:'#434344',
      }
    },
  },
  plugins: [],
}
