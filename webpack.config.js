const path = require('path');

module.exports = {
  entry: './src/index.js',
  load: './src/page-load.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
    ]
  }
};
