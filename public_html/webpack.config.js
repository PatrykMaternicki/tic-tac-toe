
var path = require('path');

module.exports = {
  entry: './JS/app.js',
  output: {
    filename: 'client/client.min.js'
  },
  devtool: 'inline-source-map',
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
};
