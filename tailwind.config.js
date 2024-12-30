/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "ld": "1920px",
        "xld": "2560px",
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
      },
    },
  },
  plugins: [],
};
