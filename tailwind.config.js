/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#292929",
        light: "#F8FDF9",
        lightSm: "#E8E8FF",
        darkSm: "#575757",
        secondary: "#FFE3CE",
        primary: "#126343",
        primarySm: "#2ABC82",
        lightXs: "#737780",
      },
    },
  },
  plugins: [],
};
