/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btClr1: "#6C25FF",
        btClr2: "#6C25FF4B",
        tc1: "#FFFFFF",
        tc2: "#1D2226",
        tc3: "#6C25FF",
        borderClr: "rgb(161 161 170)",
        bgClr: "rgb(255 251 235 )",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
