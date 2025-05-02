import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: {
          50: "#effcfc",
          100: "#d7f5f6",
          200: "#b4eaed",
          300: "#80dbe0",
          400: "#45c1cb",
          500: "#2caeba", // actual primary
          600: "#258695",
          700: "#256c79",
          800: "#265964",
          900: "#234b56",
          950: "#12303a",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
