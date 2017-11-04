const webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonConfig = require('./webpack.common.js');

const { htmlTemplateFile, heroku: { htmlTemplateTitle } } = require('../variables/webpack');
const { metaDescription, metaImage, metaTitle, metaType, metaURL } = require('../variables/common');

module.exports = Merge(CommonConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      title: htmlTemplateTitle,
      template: htmlTemplateFile,
      metaType,
      metaURL,
      metaDescription,
      metaImage,
      metaTitle
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false,
    })
  ]
});
