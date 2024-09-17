/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courierPrime: ["CourierPrime"],
        cabinetGrotesk: ["CabinetGrotesk"],
        chakraPetch: ["ChakraPetch"],
        spaceGrotesk: ["SpaceGrotesk"],
      },
      screens: {
        "lt-1596": { max: "1520px", min: "640px" },
        "bt-827": { min: "956px" },
        "lt-827": { max: "827px" },
        "lt-1024": { max: "1024px" },
        "lt-1607": { max: "1607px" },
        "lt-1770": { max: "1770px" },
        "lt-1770": { max: "1770px" },
        "lt-1170": { max: "1170px" },
        "lt-1212": { max: "1212px" },
        "lt-1420": { max: "1420px" },
      },
      boxShadow: {
        myShadow: "-10px -10px 0px 0px #003A6C",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        move1: {
          "0%": { top: "8px" },
          "100%": { top: "41.5%" },
        },
        move2: {
          "0%": { top: "32px" },
          "100%": { top: "44%" },
        },
        move3: {
          "0%": { top: "12px" },
          "100%": { top: "41.5%" },
        },
        move4: {
          "0%": { top: "32px" },
          "100%": { top: "44%" },
        },
        move5: {
          "0%": { top: "40px" },
          "100%": { top: "41.5%" },
        },
        move6: {
          "0%": { top: "56px" },
          "100%": { top: "44%" },
        },

        move7: {
          "0%": { top: "64px" },
          "100%": { top: "41.5%" },
        },
        move8: {
          "0%": { top: "40px" },
          "100%": { top: "44%" },
        },

        move9: {
          "0%": { top: "12px" },
          "100%": { top: "41.5%" },
        },
        move10: {
          "0%": { top: "32px" },
          "100%": { top: "44%" },
        },

        move11: {
          "0%": { top: "56px" },
          "100%": { top: "41.5%" },
        },
        move12: {
          "0%": { top: "80px" },
          "100%": { top: "44%" },
        },

        move13: {
          "100%": { top: "41.5%" },
        },
        move14: {
          "0%": { top: "144px" },
          "100%": { top: "44%" },
        },
        move15: {
          "0%": { top: "105px" },
          "100%": { top: "41.5%" },
        },
        move16: {
          "0%": { top: "80px" },
          "100%": { top: "44%" },
        },
        move17: {
          "0%": { top: "52px" },
          "100%": { top: "41.5%" },
        },
        move18: {
          "0%": { top: "75px" },
          "100%": { top: "44%" },
        },
        move19: {
          "0%": { top: "68px" },
          "100%": { top: "41.5%" },
        },
        move20: {
          "0%": { top: "83px" },
          "100%": { top: "44%" },
        },
        move21: {
          "100%": { top: "46.5%" },
        },
        move22: {
          "0%": { top: "100px" },
          "100%": { top: "46.5%" },
        },
        move23: {
          "0%": { top: "85px" },
          "100%": { top: "48%" },
        },
        move24: {
          "0%": { top: "120px" },
          "100%": { top: "48%" },
        },
        move25: {
          "0%": { top: "85px" },
          "100%": { top: "49.5%" },
        },
        move26: {
          "0%": { top: "120px" },
          "100%": { top: "49.5%" },
        },
        move27: {
          "0%": { top: "190px" },
          "100%": { top: "52%" },
        },
        move28: {
          "0%": { top: "180px" },
          "100%": { top: "52%" },
        },
        move29: {
          "0%": { top: "195px" },
          "100%": { top: "52%" },
        },
        move30: {
          "0%": { top: "185px" },
          "100%": { top: "52%" },
        },
        move31: {
          "0%": { top: "200px" },
          "100%": { top: "52%" },
        },
        move32: {
          "0%": { top: "180px" },
          "100%": { top: "52%" },
        },
        move33: {
          "0%": { top: "170px" },
          "100%": { top: "53%" },
        },
        move34: {
          "100%": { bottom: "39.7%" },
        },
        move35: {
          "100%": { bottom: "29.4%" },
        },
        move36: {
          "100%": { bottom: "39.7%" },
        },
        move37: {
          "100%": { bottom: "37.7%" },
        },

        move38: {
          "100%": { bottom: "34.5%" },
        },

        move39: {
          "100%": { bottom: "32%" },
        },

        move40: {
          "100%": { bottom: "43.5%" },
        },
        move41: {
          "100%": { bottom: "39.7%" },
        },
        move42: {
          "100%": { bottom: "39.5%" },
        },
        move43: {
          "100%": { bottom: "35.9%" },
        },

        move44: {
          "100%": { bottom: "34.5%" },
        },

        move45: {
          "100%": { bottom: "33%" },
        },

        move46: {
          "100%": { bottom: "32.5%" },
        },

        move47: {
          "100%": { bottom: "32%" },
        },

        moveDown30: { "100%": { transform: "translateY(70px)" } },
        moveDown10: { "100%": { transform: "translateY(10px)" } },
        moveTop20: { "100%": { transform: "translateY(-20px)" } },
        moveTop50: { "100%": { transform: "translateY(-80px)" } },
        moveDown50: { "100%": { transform: "translateY(50px)" } },
      },
      animation: {
        fadeIn: "fadeIn 1s forwards 4s",
        fadeOut: "fadeOut 1s forwards 4s",
        move1: "move1 1s forwards 2s",
        move2: "move2 1s forwards 2s",
        move3: "move3 1s forwards 2s",
        move4: "move4 1s forwards 2s",
        move5: "move5 1s forwards 2s",
        move6: "move6 1s forwards 2s",
        move7: "move7 1s forwards 2s",
        move8: "move8 1s forwards 2s",
        move9: "move9 1s forwards 2s",
        move10: "move10 1s forwards 2s",
        move11: "move11 1s forwards 2s",
        move12: "move12 1s forwards 2s",
        move13: "move13 1s forwards 2s",
        move14: "move14 1s forwards 2s",
        move15: "move15 1s forwards 2s",
        move16: "move16 1s forwards 2s",
        move17: "move17 1s forwards 2s",
        move18: "move18 1s forwards 2s",
        move19: "move19 1s forwards 2s",
        move20: "move20 1s forwards 2s",
        move21: "move21 1s forwards 2s",
        move22: "move22 1s forwards 2s",
        move23: "move23 1s forwards 2s",
        move24: "move24 1s forwards 2s",
        move25: "move25 1s forwards 2s",
        move26: "move26 1s forwards 2s",
        move27: "move27 1s forwards 2s",
        move28: "move28 1s forwards 2s",
        move29: "move29 1s forwards 2s",
        move30: "move30 1s forwards 2s",
        move31: "move31 1s forwards 2s",
        move32: "move32 1s forwards 2s",
        move33: "move33 1s forwards 2s",
        move34: "move34 1s forwards 2s",
        move35: "move35 1s forwards 2s",
        move36: "move36 1s forwards 2s",
        move37: "move37 1s forwards 2s",
        move38: "move38 1s forwards 2s",
        move39: "move39 1s forwards 2s",
        move40: "move40 1s forwards 2s",
        move41: "move41 1s forwards 2s",
        move41: "move41 1s forwards 2s",
        move43: "move43 1s forwards 2s",
        move44: "move44 1s forwards 2s",
        move45: "move45 1s forwards 2s",
        move46: "move46 1s forwards 2s",
        move47: "move47 1s forwards 2s",
        moveDown30: "moveDown30 .9s forwards 2s",
        moveDown50: "moveDown50 .7s forwards 2s",
        moveDown10: "moveDown10 .8s forwards 2s",
        moveTop20: "moveTop20 .7s forwards 2s",
        moveTop50: "moveTop50 .7s forwards 2s",
      },
    },
  },
  plugins: [],
};
