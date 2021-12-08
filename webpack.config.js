const path = require('path');

module.exports = {
  entry: './library.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};