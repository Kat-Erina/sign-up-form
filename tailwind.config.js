/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#5E54A4",
      },
      width: {
        medium: "40%",
        large: "90%",
      },
      text: {
        "txt-6": "10rem",
      },
    },
  },
  plugins: [],
};
