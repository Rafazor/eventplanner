/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: {
          50: "#FCFAFF",
          100: "#F9F5FF",
          200: "#F4EBFF",
          300: "#EEE0FF",
          400: "#E6D1FF",
          500: "#E1C8FF",
          600: "#AE6BFF",
          700: "#7E14FF",
          800: "#5300B8",
          900: "#29005C",
          950: "#15002E",
        },
      },
    },
  },
  plugins: [],
};
