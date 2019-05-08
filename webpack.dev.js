const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    sourceMapFilename: './public/bundle.js.map'
  },
  plugins: [new LiveReloadPlugin({appendScriptTag: true})]
});
