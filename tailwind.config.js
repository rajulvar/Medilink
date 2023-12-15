/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#f4feff",
        silver: "#c4c4c4",
        darkslateblue: "#172048",
        steelblue: {
          "100": "#017399",
          "200": "#007299",
          "300": "#02607e",
          "400": "#025f7d",
        },
        white: "#fff",
        aliceblue: "#e2eaf3",
        gray: "#242527",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "1981xl": "2000px",
        "20xl": "39px",
        "3xs": "10px",
        "211xl": "230px",
        "11xl": "30px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      xl: "20px",
      "29xl": "48px",
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      "45xl": "64px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
