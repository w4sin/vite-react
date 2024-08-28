/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-light": "var(--secondary-light)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pastel: {
          ...require("daisyui/src/theming/themes")["nord"],
          "--secondary-light": "#c5daed",
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "--secondary-light": "#999ecc",
        },
      },
    ],
    logs: false,
  },
  darkMode: ["class", '[data-theme="night"]'],
};
