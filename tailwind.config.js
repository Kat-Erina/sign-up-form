/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#5E54A4",

        placeholder: "#5E54A4",
        "light-grey": "#DEDEDE",
        green: "#38CC8B",
        grey: "#BAB7D4",
        pink: "#FF7979",
        "dark-grey": "#3D3B48",
      },
      width: {
        large: "90%",
        // 460: "28.76rem",
      },
      height: {
        88: "5.5rem",
        60: "3rem",
        56: "3.5rem",
      },

      backgroundImage: {
        "mobile-image": "url(./assets/bg-intro-mobile.png)",
        "desktop-image": "url(./assets/bg-intro-desktop.png)",
      },
      padding: {
        22: "5.5rem",
      },
      fontSize: {
        lg2: ["28px", "36px"],
        "extra-small": "11px",
        10: "0.8rem",
        15: "15px",
      },
      lineHeight: {
        26: "1.625rem",
      },
      boxShadow: {
        dark: "0px 8px 0px 0px rgba(0, 0, 0, 0.15)",
        light: "0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;",
      },
      borderRadius: {
        5: "5px",
      },
      plugins: [],
    },
  },
};
