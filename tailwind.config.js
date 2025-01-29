/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "#040d31",
        tlight: "#ebe9fc",
        tdark: "#050316",
        dcard: "#022b42",
        bdark: "#032030",
        primary: "#7510f7",
        secondary: "#5be9b9",
        accent: "#05c1de",
      },
    },
  },
  plugins: [],
};
