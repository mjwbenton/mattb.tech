module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
      colors: {
        brandBackground: "rgb(252, 252, 252)",
        brandPurple: "rgb(143, 57, 201)",
        brandRed: "rgb(210, 55, 55)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
