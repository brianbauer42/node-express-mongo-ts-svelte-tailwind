const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './client/**/*.html',
    './client/**/*.svelte'
  ],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const production = !process.env.ROLLUP_WATCH

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss'),
    ...(production ? [purgecss] : [])
  ]
};
