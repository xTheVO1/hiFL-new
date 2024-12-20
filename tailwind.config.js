module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
      },
      screens: {
        sm: "350px",
        md: "650px",
        lg: "900px",
        xl: "1200px",
        xxl: "1350px",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000CFF",
          "primary-content": "#ffffff",
          secondary: "#000229",
          accent: "#EA1D24",
          "accent-content": "#ffffff",
          overlay: "#000229",
          warning: "#F4C316",
        },
      },
    ],
  },
};
