/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
      DEFAULT: {
        css: {
          color: '#4a4a4a',
          h1: {
            color: '#1a202c',
          },
          h2: {
            color: '#2d3748',
          },
          p: {
            fontSize: '1.1rem',
            lineHeight: '1.8',
          },
          a: {
            color: '#3182ce',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
    },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}