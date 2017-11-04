const webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonConfig = require('../webpack/webpack.common.js');

const { htmlTemplateFile, heroku: { htmlTemplateTitle } } = require('../variables/webpack');

module.exports = Merge(CommonConfig, {
});
