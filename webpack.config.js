const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'js-utility-function.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Util',
    libraryTarget: 'umd',
  },
};
