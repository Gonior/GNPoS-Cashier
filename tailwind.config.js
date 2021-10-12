module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.!]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty : {
        'height' : 'height',
        'width' : 'width'
      }
    },
  },
  variants: {
    extend: {
      opacity : ['disabled'],
      height : ['hover']
    },
  },
  plugins: [],
}
