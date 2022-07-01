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
    },
    plugins: [],
  },
};
