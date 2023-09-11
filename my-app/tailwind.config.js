/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        tahoma: ['Tahoma', 'sans'],
      },
      width: {
        '96': '24rem', 
        '144': '36rem',
        '120': '30rem'
      },
      height: {
        '48': '12rem', // Example: Create a custom height class 'h-48'
        '64': '16rem', // Create a custom height class 'h-64'
        '140': '40rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
