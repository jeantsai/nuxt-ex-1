const colors = require("tailwindcss/colors");

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#42B883",
        secondary: colors.gray["400"],
        neutral: "#F7F9FA",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        },
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
