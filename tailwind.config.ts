import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // فونت پیش‌فرض برای font-sans
        sans: ['"Inter"', "sans-serif"],
      },
      // اگر خواستی می‌تونی weight ها یا size های دلخواه اضافه کنی
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};

export default config;
