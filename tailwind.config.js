// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        custom: "0.5rem 0 0.2rem blue",
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ["focus", "hover"],
    },
  },
  plugins: [],
};
