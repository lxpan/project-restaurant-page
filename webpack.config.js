const path = require('path');

module.exports = {
  entry: './src/index.js',
  load: './src/page-load.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
