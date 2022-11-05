/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue-b": "hsl(207, 26%, 17%)",
        "very-dark-blue-t": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      boxShadow: {
        "navbar": "0 5px 5px -1px rgba(0,0,0,0.25)",
        "box": "rgba(0, 0, 0, 0.35) 0px 5px 10px",
      },
    },
  },
  plugins: [],
};
