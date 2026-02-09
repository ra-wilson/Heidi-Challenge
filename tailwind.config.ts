import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8ED",
        plum: "#2F1D21",
        mauve: "#836A6C",
        haze: "#A1959B",
        olive: "#BBAD64",
        stone: "#BEB1B2"
      },
      boxShadow: {
        panel: "0 8px 30px rgba(47, 29, 33, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
