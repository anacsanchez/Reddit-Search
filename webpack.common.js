const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.handlebars$/,
        use: 'handlebars-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Reddit Search',
    base: '/reddit',
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8'
    },
    template: 'src/index.handlebars'
  })]
};
