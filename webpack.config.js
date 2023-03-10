const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

plugins: [
  new HtmlWebpackPlugin({
   title: 'Output Management',
   template: './src/index.html',
  }),
],

  output: {

    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },



  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};