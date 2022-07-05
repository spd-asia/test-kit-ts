const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const autoprefixer = require('autoprefixer');

module.exports = {
  // only vars used are in build output
  plugins: [
    postcssJitProps(OpenProps),
    autoprefixer()
  ],
};