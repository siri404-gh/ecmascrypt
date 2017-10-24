const { dist } = require('./common');

module.exports = {
  entry: './index.js',
  dist,
  bundle: 'bundle.js',
  devPort: 4000,
  logs: './*.log',
  outputFileName: '[name].bundle.js',
  resolveExtensions: ['.js', '.json', '.jsx'],
  sourceMapType: 'inline-source-map',
  htmlTemplateTitle: 'Development',
  htmlTemplateFile: 'index.ejs',
  firebase: {
    htmlTemplateTitle: 'Firebase Title',
  },
  heroku: {
    htmlTemplateTitle: 'Heroku Title',
  }
};
