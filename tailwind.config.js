/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee1: "marquee2 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        marquee3: "marquee2 25s linear infinite",
        marquee4: "marquee2 25s linear infinite",
        marquee5: "marquee5 25s linear infinite",
        marquee6: "marquee2 25s linear infinite",
        marquee7: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee5: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        ld: "1920px",
        xld: "2560px",
        xs: { max: "375px" },
        mds: { min: "1200px", max: "1650px" },
      },
      fontFamily: {
        // Primary font is SF Pro Text
        sans: ['"SF Pro Text"', "sans-serif"],
        // Adding Poppins as a fallback or alternative font
        poppins: ['"Poppins"', "sans-serif"],
        // Adding Inter as a third font option
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: ["18px", "20.06px"],
      },
      colors: {
        figmaBlack: "#000000",
        figmaGreen: "#26AD00",
        greenbackgrond: "#58FF2926",
        paragraphColor: "#0E0F19B2",
        buttonGreengroundImage: {
          "green-gradient":
            "linear-gradient(180deg, #58FF29 0%, #31DE00 50%, #26AD00 100%)",
        },
        darkBackGround: "#0E0F19",
      },
    },
  },
  plugins: [],
};
