/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Roboto', 'sans-serif'],
      },

      colors: {
        text: {
          default: '#ffffff',
          'default-negative': '#222222',
          'default-hover': '#3f51b5',
        },
        background: {
          primary: '#20232a',
          secondary: '#3f51b5',
          disabled: '#808080',
          error: '#ae2525'
        }
      }
    },
  },
  plugins: [],
}