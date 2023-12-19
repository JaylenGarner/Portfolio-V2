module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ], // remove unused styles in production
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        vortex:
          "url('https://jaylen-garner.s3.amazonaws.com/Public/Assets/vortex.gif')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
