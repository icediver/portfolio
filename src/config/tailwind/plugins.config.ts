import plugin from "tailwindcss/plugin";

export const plugins = [
  // require("@tailwindcss/forms"),
  // require("@tailwindcss/aspect-ratio"),
  plugin(({ addComponents, theme, addUtilities, addBase }) => {
    addComponents({}),
      addUtilities({
        ".glass-morphism": {
          // background: "theme('colors.violet.900/80%')",
          /* From https://css.glass */
          background: "rgba(36, 0, 49, 0.4)",
          "border-radius": "0 0 10px 10px",
          "box-shadow": "0 2px 20px rgba(92, 0, 130, 0.8)",
          "backdrop-filter": "blur(45px)",
          "-webkit-backdrop-filter": "blur(5px)",
          border: "1px solid rgba(92, 0, 130, 0.16)",
        },
      }),
      addBase({});
  }),
];
