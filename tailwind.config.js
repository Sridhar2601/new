/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Important for CRA!
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Inter", "sans-serif"],
//       },
//     },
//     screens: {
//       lg: { min: "925px" }, // custom screen size like Vite
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // add Inter font
      },
      screens: {
        lg: { min: "925px" }, // custom screen size
      },
    },
  },
  plugins: [],
};
