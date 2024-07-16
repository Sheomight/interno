/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Serif Display", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        call: "url(/src/assets/images/icon/Call.svg)",
        arrow: "url(/src/assets/images/icon/arrow.svg)",
      },
      colors: {
        primaryGold: "#CDA274",
        primaryDark: "#292F36",
        primaryLight: "#F4F0EC",
        backgroundLight: "#F4F0EC",
        textSmall: "#4D5053",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "0",
          md: "0",
          lg: "0",
          xl: "0",
          "2xl": "0",
        },
      },
      fontSize: {
        "2xs": "16px",
        xs: "18px",
        sm: "20px",
        base: "22px",
        lg: "25px",
        xl: "35px",
        "2xl": "50px",
        "3xl": "65px",
        "4xl": "85px",
      },
      boxShadow: {
        article: "0px_10px_30px_0px_rgba(255, 255, 255, 0.25)",
        btnDark: "0px_10px_20px_0px_rgb(31, 32, 34)",
        btnLight: "0px_10px_20px_0px_#C0C0C0",
      },
      margin: {
        sectionLG: "200px",
        sectionMD: "150px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("autoprefixer")],
}
