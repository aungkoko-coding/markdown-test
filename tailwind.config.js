/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      animation: {
        shine: "shine 1s",
        infinite_shine: "infinite_shine 3s infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        infinite_shine: {
          "40%, 100%": {
            opacity: "0",
            left: "125%",
          },
          "0%": {
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
        },
      },
      colors: {
        primary: "#ffa801", // yellow
        secondary: "#0ebeff", // cyan
        default: "#03032b",
        paper: "#04023f",
      },
    },
  },
  plugins: [],
};
export default config;
