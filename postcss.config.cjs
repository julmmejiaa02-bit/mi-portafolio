
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx,html}'
      ],
      safelist: []
    })
  ]
};
