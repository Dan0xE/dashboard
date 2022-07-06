/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "full-hd": "1280px",
        "full-hd-plus": "1440px",
        "ultra-hd": "2160px",
      },
      colors: {
        "titlebar-color": "#11161d",
        github: "#24292e",
      },
      transitionProperty: {
        width: "width",
      },
      margin: {
        30: "172px",
      },
      plugins: [],
    },
  },
};
