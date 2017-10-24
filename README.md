[![Build Status](https://travis-ci.org/sreerampr/ecmascrypt.svg?branch=master)](https://travis-ci.org/sreerampr/ecmascrypt)
[![codecov](https://codecov.io/gh/sreerampr/ecmascrypt/branch/master/graph/badge.svg)](https://codecov.io/gh/sreerampr/ecmascrypt)
[![Maintainability](https://api.codeclimate.com/v1/badges/ee15c93b8d04a9af62c5/maintainability)](https://codeclimate.com/github/sreerampr/ecmascrypt/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ee15c93b8d04a9af62c5/test_coverage)](https://codeclimate.com/github/sreerampr/ecmascrypt/test_coverage)

# pipeline
The ultimate pipeline boilerplate

## yarn scripts
*  "start:web:dev": "./node_modules/.bin/webpack-dev-server --config=./webpack/webpack.config.js --env=dev --progress --profile --colors --open",
* "flow": "./node_modules/.bin/flow",
*  "lint": "./node_modules/.bin/eslint .",
*  "test": "karma start .karma.conf.js",
*  "report-coverage": "./node_modules/.bin/codecov -t $CODECOV_KEY",
*  "docs": "./node_modules/.bin/esdoc",
*  "prod": "./node_modules/.bin/webpack --config=./webpack/webpack.config.js --env=prod",
*  "start": "npm run prod && node server/server",
*  "pa11y": "mkdir -p ./output/reports/.pa11y && ./node_modules/.bin/pa11y-ci --config .pa11yrc --threshold 5 --json > ./output/reports/.pa11y/output.json",
*  "sitespeed":"./node_modules/.bin/sitespeed.io --outputFolder=./output/reports/.sitespeed --config=.sitespeed.json .sitespeed.txt",
*  "firebase-deploy": "./node_modules/.bin/firebase deploy",
*  "cleanup": "./node_modules/.bin/rimraf android/app/src/main/assets android ios output TMPDIR/react-* node_modules && yarn",
*  "eject": "react-native eject",
*  "bundle": "react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/",
*  "bundle:mobile": "yarn cleanup && yarn eject && mkdir android/app/src/main/assets && yarn bundle && yarn cleanup",
*  "start:mobile:server": "node node_modules/react-native/local-cli/cli.js start -- --reset-cache",
*  "start:mobile:dev": "react-native run-android",
*  "start:mobile:dev:ios": "react-native run-ios",
*  "test:mobile": "./node_modules/.bin/jest"

# Docker commands
* docker build -t sreeram/ecmascrypt .
* docker run -p 5000:5000 -d sreeram/ecmascrypt
* docker logs <containerId>
* docker exec -it <containerId> /bin/bash
* docker images
* docker ps
* docker stop <containerId>
* docker ps -aq
* docker stop $(docker ps -aq)
* docker rm $(docker ps -aq)
* docker rmi <imageID>

# Environment variables
* CODECOV_KEY
* DOCKER_PASSWORD
* DOCKER_REPO
* DOCKER_USERNAME
* FIREBASE_APP
* FIREBASE_TOKEN
* HEROKU_API_KEY
* HEROKU_APP_NAME
* NODE_ENV

# Technologies Used
* Git + Github/Gitlab
* Node JS
* Yarn/Npm
* React
* React Native
* Bootstrap
* Redux
* JSDoc
* Express + Morgan
* Webpack
* Karma + Jasmine
* Jest
* Code Quality Reporting
* Code Coverage Reporting
* Travis CI
* BDD using Cucumber + Browserstack
* Pa11y Accessibility Testing
* Sitespeed Performance Testing
* Firebase Deployment
* Docker
* Heroku deployment
* Eslint
* Editorconfig
* Google Analytics
* Google Adsense
* Google Pagespeed
* Slack notification from - Github/Travis/Docker/Heroku