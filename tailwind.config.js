
const production = !process.env.ROLLUP_WATCH

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: production,
    content: ["./client/**/*.svelte", "./client/**/*.html"]
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss'),
  ]
};
