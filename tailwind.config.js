/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   Poppins: ["Poppins"],
    // },
    extend: {
      colors: {
        green: "#118F4B",
        orange: "#D94111",
        blue: "#53ACFF",
        white: "#fff",
        gray: "#313131",
        divider: "#414040",
        black: "#181818",
        background: "#202020",
        lightGray: "#5D5D5D",
        lightgray: "#979797",
        darkGray: "#202020",
        gray1: "#6B6B6B",
        radio: "#494949",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 0.5s easeIn-out forwards",
        fadeInLeft: "fadeInLeft 0.7s  linear",
        fadeInRight: "fadeInRight 0.7s  linear",
        close: "close 0.5s linear",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        close: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      fontFamily: {
        poppinsThin: {
          fontFamily: "Poppins",
          fontWeight: 100,
        },

        poppinsExtralight: {
          fontFamily: "Poppins",
          fontWeight: 200,
        },

        poppinsLight: {
          fontFamily: "Poppins",
          fontWeight: 300,
        },

        poppinsRegular: {
          fontFamily: "Poppins",
          fontWeight: 400,
        },

        poppinsMedium: {
          fontFamily: "Poppins",
          fontWeight: 500,
        },

        poppinsSemibold: {
          fontFamily: "Poppins",
          fontWeight: 600,
        },

        poppinsBold: {
          fontFamily: "Poppins",
          fontWeight: 700,
        },

        poppinsExtrabold: {
          fontFamily: "Poppins",
          fontWeight: 800,
        },

        poppinsBlack: {
          fontFamily: "Poppins",
          fontWeight: 900,
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#53ACFF",
          neutral: "#414040",
          info: "#fff",
          success: "#118F4B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
