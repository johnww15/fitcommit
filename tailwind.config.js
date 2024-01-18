/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#81f4c3",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      jade: {
        50: "#effef7",
        100: "#dafeef",
        200: "#b8fadd",
        300: "#81f4c3",
        400: "#43e5a0",
        500: "#1acd81",
        600: "#0fa968",
        700: "#108554",
        800: "#126945",
        900: "#11563a",
        950: "#03301f",
      },
    },
    extend: {},
  },
  plugins: [],
};
