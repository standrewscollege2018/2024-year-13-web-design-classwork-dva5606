/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}',
  "./src/**/*.{html,js,svelte,ts}",
  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',

  theme: {
    screens:{
      
    },
    extend: {
      colors: {  
          white: "#ffffff",
          black: "#000000",
          lightModeGrey: {
          "100": "#f8f8f8",
          "200": "#e6e6e6",
          "300": "#d1d1d1",
          "400": "#C8C8C8",
          "500": "#818181",
          "600": "#707070",
          "700": "#505050",
          "800": "#242424",
        },
      },

      fontFamily: {
        consolas: "Consolas",
        calibri: "Calibri",
      },
      keyframes: {
        FadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        animation: {
          fade: "fadeIn 1s ease-in",
        }
      },
    },
  },
  plugins: [],
}
