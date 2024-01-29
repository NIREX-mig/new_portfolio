/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        'tlight' : '#ebe9fc',
        'tdark' : '#050316',
        'blight' : '#fbfbfe',
        'bdark' : '#010104',
        'primary' : '#725cde',
        'secondary' : '#3dffbb',
        'accent' : '#05c1de'
      }
    },
  },
  plugins: [],
};
