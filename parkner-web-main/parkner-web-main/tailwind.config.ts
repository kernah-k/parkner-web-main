import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7f7",
          100: "#ceeff0",
          200: "#b5e6e8",
          300: "#9ddee0",
          400: "#84d6d9",
          500: "#6bced1",
          600: "#53c6c9",
          700: "#3abdc1",
          800: "#22b5ba",
          900: "#09adb2",
        },
        secondary: {
          50: "#ebf4f2",
          100: "#d7e8e5",
          200: "#c2ddd8",
          300: "#aed1cb",
          400: "#9ac6be",
          500: "#86bab0",
          600: "#72afa3",
          700: "#5da396",
          800: "#499889",
          900: "#358c7c",
        },
        neutral: {
          0: "#ffffff",
          50: "#e6e7e7",
          100: "#cdcfce",
          200: "#b4b7b6",
          300: "#9b9f9e",
          400: "#828786",
          500: "#696e6d",
          600: "#505655",
          700: "#373e3d",
          800: "#1e2624",
          900: "#050e0c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
