import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07090f",
        panel: "#11141d",
        line: "#242938",
        violet: "#876cff",
        mint: "#5ee8c5",
      },
      boxShadow: {
        glow: "0 0 40px rgba(135, 108, 255, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
