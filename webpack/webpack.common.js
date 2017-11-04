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
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.less$/, use: ['style-loader', 'css-loader?modules', 'postcss-loader',], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader',]},
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
      { test: /^((?!config).)*\.js?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory' },
      { test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/, loader: 'file-loader', exclude: /node_modules/ }
    ]
  },
  stats: {
    warnings: false
  }
};