/** @type {import('tailwindcss').Config} */
const { fontFamily } =require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        mont: ['var(--font-mont)',...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage:{
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px)',
        circularDark:'repeating-radial-gradient(rgba(225,255,255,0.5) 2px,#1b1b1b 8px, #1b1b1b 100px)',
        circularLightLg:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 80px)',
        circularDarkLg:'repeating-radial-gradient(rgba(225,255,255,0.5) 2px,#1b1b1b 8px, #1b1b1b 80px)',
        circularLightMd:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        circularDarkMd:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",
        circularLightSm:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
        circularDarkSm:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
        radialBg:"radial-gradient(circle, rgba(136,154,230,1) 0%, rgba(0,212,255,1) 62%, rgba(34,142,227,1) 86%)",
        radialBg2:"radial-gradient(circle, rgba(7,158,176,1) 0%, rgba(0,3,96,1) 62%, rgba(78,0,113,1) 86%)",
        radialBg3:"linear-gradient(90deg, rgba(7,158,176,0.10136554621848737) 0%, rgba(0,96,93,1) 62%, rgba(105,70,121,1) 86%)"
      }
    },
    screens:{
      "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
    }
  },
  plugins: [],
}

