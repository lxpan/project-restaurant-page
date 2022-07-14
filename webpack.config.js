const path = require('path');


module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
  },
  devtool: 'inline-source-map',
};
