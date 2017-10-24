exports.config = {
  user: 'sreerampadmanabh1',
  key: 'K6mzWBTF1sCipMBTuggm',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'chrome',
    name: "local_test",
    build: "cucumber-js-browserstack",
    'browserstack.local': true
  }]
}