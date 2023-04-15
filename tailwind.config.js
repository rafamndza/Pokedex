/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/index.css",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation:{
        fadeIn:"fadeIn",
        fadeOut:"fadeOut",
        scaleIn:"scaleIn",
        scaleOut:"scaleOut"
      },
      keyframes:{
        fadeIn:{
          "0%":{opacity:0},
          "100%":{opacity:1}
        },
        fadeOut:{
          "0%":{opacity:1},
          "100%":{opacity:0}
        },
        scaleIn:{
          "0%":{transfor: "scale(0)"},
          "100%":{transfor: "scale(1)"}
        },
        scaleOut:{
          "0%":{transfor: "scale(1)"},
          "100%":{transfor: "scale(0)"}
        }



      }
    },
  },
  plugins: [],
}

