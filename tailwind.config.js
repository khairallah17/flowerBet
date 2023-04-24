/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: "#382345",
          light: "#462e54"
        },
        secondary: {
          DEFAULT: "#D71468",
          light: "#d9347b"
        }
      }
    },
  },
  plugins: [],
}

