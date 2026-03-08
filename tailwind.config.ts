import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        cursive: ["var(--font-cursive)", "cursive"],
      },

      colors: {
        /* ============================= */
        /* DIM GREY */
        /* ============================= */
        "dim-grey": {
          50: "var(--color-dim-grey-50)",
          100: "var(--color-dim-grey-100)",
          200: "var(--color-dim-grey-200)",
          300: "var(--color-dim-grey-300)",
          400: "var(--color-dim-grey-400)",
          500: "var(--color-dim-grey-500)",
          600: "var(--color-dim-grey-600)",
          700: "var(--color-dim-grey-700)",
          800: "var(--color-dim-grey-800)",
          900: "var(--color-dim-grey-900)",
          950: "var(--color-dim-grey-950)",
        },

        /* ============================= */
        /* SILVER */
        /* ============================= */
        silver: {
          50: "var(--color-silver-50)",
          100: "var(--color-silver-100)",
          200: "var(--color-silver-200)",
          300: "var(--color-silver-300)",
          400: "var(--color-silver-400)",
          500: "var(--color-silver-500)",
          600: "var(--color-silver-600)",
          700: "var(--color-silver-700)",
          800: "var(--color-silver-800)",
          900: "var(--color-silver-900)",
          950: "var(--color-silver-950)",
        },

        /* ============================= */
        /* TOFFEE BROWN */
        /* ============================= */
        "toffee-brown": {
          50: "var(--color-toffee-brown-50)",
          100: "var(--color-toffee-brown-100)",
          200: "var(--color-toffee-brown-200)",
          300: "var(--color-toffee-brown-300)",
          400: "var(--color-toffee-brown-400)",
          500: "var(--color-toffee-brown-500)",
          600: "var(--color-toffee-brown-600)",
          700: "var(--color-toffee-brown-700)",
          800: "var(--color-toffee-brown-800)",
          900: "var(--color-toffee-brown-900)",
          950: "var(--color-toffee-brown-950)",
        },

        /* ============================= */
        /* CAMEL */
        /* ============================= */
        camel: {
          50: "var(--color-camel-50)",
          100: "var(--color-camel-100)",
          200: "var(--color-camel-200)",
          300: "var(--color-camel-300)",
          400: "var(--color-camel-400)",
          500: "var(--color-camel-500)",
          600: "var(--color-camel-600)",
          700: "var(--color-camel-700)",
          800: "var(--color-camel-800)",
          900: "var(--color-camel-900)",
          950: "var(--color-camel-950)",
        },

        /* ============================= */
        /* GRAPHITE */
        /* ============================= */
        graphite: {
          50: "var(--color-graphite-50)",
          100: "var(--color-graphite-100)",
          200: "var(--color-graphite-200)",
          300: "var(--color-graphite-300)",
          400: "var(--color-graphite-400)",
          500: "var(--color-graphite-500)",
          600: "var(--color-graphite-600)",
          700: "var(--color-graphite-700)",
          800: "var(--color-graphite-800)",
          900: "var(--color-graphite-900)",
          950: "var(--color-graphite-950)",
        },

        /* ============================= */
        /* LEBRON PALETTE */
        /* ============================= */
        lebron: {
          50: "var(--color-lebron-50)",
          100: "var(--color-lebron-100)",
          200: "var(--color-lebron-200)",
          400: "var(--color-lebron-400)",
          700: "var(--color-lebron-700)",
        },
      },
    },
  },
  plugins: [],
};

export default config;