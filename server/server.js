const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const { port, dist } = require('../variables/server');
const { docs } = require('../variables/esdoc');
const { sitespeedDir } = require('../variables/sitespeed');
const { karma_coverage_dir } = require('../variables/karma');
const { output } = require('../variables/pa11y');
const { report } = require('../variables/cucumber');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('tiny'));

app.use('/', express.static(dist));
app.use('/docs', express.static(docs));
app.use('/coverage', express.static(karma_coverage_dir));
app.use('/pa11y', express.static(output));
app.use('/sitespeed', express.static(sitespeedDir));
app.use('/eslint', express.static('output/reports/.eslint'));
app.use('/cucumber', express.static(report));

app.listen(port);

console.log(`SERVER: Listening on port ${port}`);
