module.exports = {
  content: ["./docs/**/*.{html, md}"],
  safelist: [
    "text-common",
    "text-rare",
    "text-epic",
    "text-legendary",
    "text-junk",
    "text-bank",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        common: "rgb(34 197 94)",
        rare: "rgb(59 130 246)",
        epic: "rgb(168 85 247)",
        legendary: "rgb(202 138 4)",
        junk: "rgb(107 114 128)",
        bank: "rgb(22 163 74)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
