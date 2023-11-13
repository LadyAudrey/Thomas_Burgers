import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkBrown: "#303030",
      lightBrown: "#795833",
      brownOrange: "#e16539",
      orange: "#ffa857",
      pinkOrange: "#ff6b57",
      pink: "#ffb1a5",
      blue1: "#51abb2",
      blue2: "#6ec6cd",
      offWhite: "#f0dfc8",
      white: "#fff",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
