const { dist } = require('./common');

module.exports = {
  dist,
  port: process.env.PORT || $PORT || 5000
};