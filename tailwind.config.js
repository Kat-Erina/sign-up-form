/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "blue",
        "txt-color": "#38CC8B",
      },
      width: {
        medium: "6rem",
      },
      text: {
        "txt-6": "10rem",
      },
    },
  },
  plugins: [],
};
