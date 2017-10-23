const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const { entry, dist, logs, outputFileName, resolveExtensions } = require('../variables/webpack');

module.exports = {
  entry: { app: entry },
  output: {
    path: path.resolve(__dirname, '.' + dist),
    filename: outputFileName,
    publicPath: '/',
  },
  resolve: {
    extensions: resolveExtensions,
    modules: [path.join(__dirname, 'components'), 'node_modules']
  },
  plugins: [
    new ManifestPlugin({
      fileName: '.manifest.json',
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  stats: {
    warnings: false
  }
};