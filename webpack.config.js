const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './app.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env'] },
        }],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
};
