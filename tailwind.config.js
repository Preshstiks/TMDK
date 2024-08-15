/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      MerriBold: ["MerriBold", "sans-serif"],
      MerriExtraBold: ["MerriExtraBold", "sans-serif"],
      MerriLight: ["MerriLight", "sans-serif"],
      MerriMedium: ["MerriMedium", "sans-serif"],
      MerriRegular: ["MerriRegular", "sans-serif"],
      MerriSemiBold: ["MerriSemiBold", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      xmd: "880px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
