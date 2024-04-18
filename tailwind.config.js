import { createThemes } from "tw-colors";
// const { createThemes } = require("tw-colors");

import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        50: "#f2feef",
        100: "#e1feda",
        200: "#c2fbb7",
        300: "#92f67f",
        400: "#5be741",
        500: "#34cf18",
        600: "#28b90e",
        700: "#20870e",
        800: "#1d6a11",
        900: "#195710",
        950: "#063102",
      },

      secondary: {
        50: "#ebeaeb",
        100: "#e4e4e5",
        200: "#ddddde",
        300: "#c9c8ca",
        400: "#a09fa3",
        500: "#77767b",
        600: "#6b6a6f",
        700: "#59595c",
        800: "#47474a",
        900: "#3a3a3c",
      },
      tertiary: {
        50: "#edf9ff",
        100: "#d6f1ff",
        200: "#b5e8ff",
        300: "#83dbff",
        400: "#48c6ff",
        500: "#1ea6ff",
        600: "#0687ff",
        700: "#0073ff",
        800: "#0858c5",
        900: "#0d4d9b",
        950: "#0e2f5d",
      },
      success: {
        50: "#e7ffe4",
        100: "#c9ffc4",
        200: "#98ff90",
        300: "#56ff50",
        400: "#00ff00",
        500: "#00e606",
        600: "#00b809",
        700: "#008b07",
        800: "#076d0d",
        900: "#0b5c11",
        950: "#003406",
      },
      warning: {
        50: "#fcf4da",
        100: "#fbf0ce",
        200: "#faecc1",
        300: "#f7e19c",
        400: "#f0ca52",
        500: "#EAB308",
        600: "#d3a107",
        700: "#b08606",
        800: "#8c6b05",
        900: "#735804",
      },
      error: {
        50: "#fdf3f3",
        100: "#fce4e4",
        200: "#facece",
        300: "#f5acac",
        400: "#ed7c7c",
        500: "#e15252",
        600: "#cd3737",
        700: "#ac2929",
        800: "#8e2626",
        900: "#772525",
        950: "#400f0f",
      },
      surface: {
        50: "#dcdcdc",
        100: "#d0d0d0",
        200: "#c4c4c4",
        300: "#a1a1a1",
        400: "#5b5b5b",
        500: "#141414",
        600: "#121212",
        700: "#0f0f0f",
        800: "#0c0c0c",
        900: "#0a0a0a",
      },
    },
  },

  darkMode: "class",
  // plugins: [nextui()],
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              // apple
              DEFAULT: "#3eb142",
              foreground: "#000000",
              50: "#f2fbf2",
              100: "#e1f7e2",
              200: "#c5edc6",
              300: "#97de99",
              400: "#62c665",
              500: "#3eb142",
              600: "#2c8d30",
              700: "#266f29",
              800: "#235825",
              900: "#1e4921",
              950: "#0c270e",
            },
          },
        },
        light: {
          colors: {
            primary: {
              // Persian Red
              DEFAULT: "#2c6d2c",
              foreground: "#000000",
              50: "#f4faf3",
              100: "#e4f5e3",
              200: "#c7ebc7",
              300: "#9cda9b",
              400: "#69c068",
              500: "#43a443",
              600: "#338633",
              700: "#2c6d2c",
              800: "#265526",
              900: "#214622",
              950: "#0d260e",
            },
          },
        },
      },
    }),
    createThemes({
      light: {
        primary: {
          DEFAULT: "orange",
          100: "red",
          200: "blue",
        },
      },
      dark: {
        primary: {
          DEFAULT: "red",
          100: "lime",
          200: "pink",
        },
      },
    }),
  ],
};
