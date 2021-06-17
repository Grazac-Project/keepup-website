module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Lora", "serif", "sans-serif"],
      secondary: "Recoleta",
      tertiary: ["Source Sans Pro", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      primary: "#F58726",
      white: "#fff",
      pink: "#FBE7D3",
      head: "#030828",
      hero: "rgba(203, 203, 223, 0.25)",
      nav: "rgb(203, 203, 223)",
      blue: "#000066",
      gray: {
        50: "rgba(229, 229, 229, 0.5)",
        100: "#626161",
        light: "#8D8B8B",
        dark: "#222222",
      },
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/5": "60%",
      "3/4": "75%",
      sm: "400px",
      xl: "1400px",
      md: "1200px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
