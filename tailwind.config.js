module.exports = {
  content: ["./docs/**/*.{html, md}"],
  safelist: [
    "text-green-500",
    "text-blue-500",
    "text-purple-500",
    "text-yellow-500",
    "text-gray-500",
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
