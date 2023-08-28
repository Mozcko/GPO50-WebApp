/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary: "#050816",
        //secondary: "#aaa6c3",
        //tertiary: "#151030",

        "manada": "#ffb711",
        "tropa": "#00712e",
        "comunidad": "#004cac",
        "clan": "#cb0f22",
        "consejo": "#5b2c93",
        "manada-100": "#ffb711a2",
        "tropa-100": "#00712ea2",
        "comunidad-100": "#004daca2",
        "clan-100": "#cb0f22a2"
      },

      backgroundColor: {
        "bg-manada": "#ffb711",
        "bg-tropa": "#00712e",
        "bg-comunidad": "#004cac",
        "bg-clan": "#cb0f22",
        "bg-consejo": "#5b2c93",
      },

      backgroundImage: {
        "hero-pattern": "url(/src/assets/herobg.jpg)",
      },
    },
  },
  plugins: [],
}

