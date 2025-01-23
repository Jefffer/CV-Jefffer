/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'], // Poppins como predeterminada
        serif: ['Inter', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "120ch",
            color: "#4a4a4a",
            h1: {
              color: "#1a202c",
            },
            h2: {
              color: "#2d3748",
            },
            p: {
              fontSize: "1.1rem",
              lineHeight: "1.8",
            },
            a: {
              color: "#3182ce",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
