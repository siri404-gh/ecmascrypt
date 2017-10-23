const { src, tests } = require('./common');

module.exports = {
  src,
  docs: './output/reports/.docs',
  title: 'Title',
  description: 'Description',
  github: '',
  twitter: '',
  site: '',
  image: '',
  tests,
  interfaces:  ["describe", "it", "context", "suite", "test"],
};