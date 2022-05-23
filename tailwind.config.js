module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'redOng': '#DB5752',
        'yellowOng': '#FAFA88',
        'blueOng': '#9AC9FB',
      },
    },
  },
  plugins: [],
}
