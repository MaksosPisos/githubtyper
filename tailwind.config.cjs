module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Courier Prime', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
