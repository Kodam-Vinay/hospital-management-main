/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        mxs: "475px",
        sm: "640px",
        md: "768px",
        mdl: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
