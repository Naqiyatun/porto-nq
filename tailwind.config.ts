import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "basic": "#EEE2BD",
        "primary": {
          DEFAULT: "#AA785D",
          100: "#7c2d12",
          80: "#a35941",
          60: "#C5A283"
        },
        "secondary": {
          DEFAULT: "#031B3D",
          70: "#1e3a8a",
        },
        "tertiary": "#F7E6DC",
      },
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
