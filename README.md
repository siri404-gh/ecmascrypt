[![Build Status](https://travis-ci.org/sreerampr/ecmascrypt.svg?branch=master)](https://travis-ci.org/sreerampr/ecmascrypt)
[![codecov](https://codecov.io/gh/sreerampr/ecmascrypt/branch/master/graph/badge.svg)](https://codecov.io/gh/sreerampr/ecmascrypt)
[![Maintainability](https://api.codeclimate.com/v1/badges/ee15c93b8d04a9af62c5/maintainability)](https://codeclimate.com/github/sreerampr/ecmascrypt/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ee15c93b8d04a9af62c5/test_coverage)](https://codeclimate.com/github/sreerampr/ecmascrypt/test_coverage)

# Ecmascrypt
The ultimate pipeline boilerplate

# Technologies Used
* :white_check_mark: Git + Github/Gitlab
* :white_check_mark: Node JS
* :white_check_mark: Yarn/Npm
* :white_check_mark: React
* :white_check_mark: React Native
* :white_check_mark: Redux
* :white_check_mark: Storybook
* :white_check_mark: JSDoc
* :white_check_mark: Express + Morgan
* :white_check_mark: Webpack
* :white_check_mark: Karma + Jasmine
* :white_check_mark: Jest
* :white_check_mark: Code Quality Reporting
* :white_check_mark: Code Coverage Reporting
* :white_check_mark: Travis CI
* :white_check_mark: BDD using Cucumber + Browserstack
* :white_check_mark: Pa11y Accessibility Testing
* :white_check_mark: Sitespeed Performance Testing
* :white_check_mark: Firebase Deployment
* :white_check_mark: Docker
* :white_check_mark: Heroku deployment
* :white_check_mark: Eslint
* :white_check_mark: Editorconfig
* :white_check_mark: Slack notification from - Github/Travis/Docker/Heroku
* Snyk
* Helmet
* OpenStack
* Bootstrap
* Material UI
* Socket.io
* Passport
* Nodemailer
* Pug
* Marked
* Graphicsmagick
* Appdynamics
* Google Analytics
* Google Adsense
* Google Pagespeed


## yarn scripts
* "dev:build": "./node_modules/.bin/webpack-dev-server --config=./webpack/webpack.config.js --env=dev --progress --profile --colors --open",
* "flow": "./node_modules/.bin/flow --json --pretty --quiet",
* "lint:dev": "mkdir -p output/reports/.eslint && ./node_modules/.bin/eslint . -c=config/.eslintrc --ignore-path=config/.eslintignore",
* "test": "./node_modules/.bin/karma start ./config/.karma.conf.js",
* "report-coverage": "./node_modules/.bin/codecov -t $CODECOV_KEY",
* "docs": "./node_modules/.bin/esdoc -c=config/.esdoc.js",
* "sitespeed": "./node_modules/.bin/sitespeed.io --outputFolder=./output/reports/.sitespeed --config=config/.sitespeed.json config/.sitespeed.txt",
* "cucumber": "mkdir -p output/reports/.cucumber && CONFIG_FILE=single ./node_modules/cucumber/bin/cucumber.js bdd/features/single.feature -f json:output/reports/.cucumber/output.json && node cucumber-reporter",
* "sanity:dev": "yarn flow && yarn lint:dev && yarn test && yarn docs && yarn sitespeed",
* "storybook": "./node_modules/.bin/start-storybook -p 6006",
* "lint": "mkdir -p output/reports/.eslint && ./node_modules/.bin/eslint . -c=config/.eslintrc --ignore-path=config/.eslintignore -o=output/reports/.eslint/index.html -f=html",
* "pa11y": "mkdir -p ./output/reports/.pa11y && ./node_modules/.bin/pa11y-ci --config config/.pa11yrc --threshold 5 --json > ./output/reports/.pa11y/output.json",
* "build-storybook": "build-storybook -o output/storybook -c config/storybook",
* "prod:build": "./node_modules/.bin/webpack --config=./webpack/webpack.config.js --env=prod",
* "firebase:build": "./node_modules/.bin/webpack --config=./webpack/webpack.config.js --env=firebase",
* "firebase-deploy": "./node_modules/.bin/firebase deploy --token $FIREBASE_TOKEN",
* "cleanup": "./node_modules/.bin/rimraf android ios output TMPDIR/react-* node_modules && yarn && yarn eject",
* "eject": "react-native eject",
* "bundle": "react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/",
* "sanity:mobile": "yarn cleanup && mkdir android/app/src/main/assets && yarn bundle && yarn cleanup",
* "start:mobile:server": "node node_modules/react-native/local-cli/cli.js start -- --reset-cache",
* "start:mobile:dev": "react-native run-android",
* "start:mobile:dev:ios": "react-native run-ios",
* "test:mobile": "./node_modules/.bin/jest",
* "docker:build": "docker build -t $DOCKER_REPO .",
* "docker:run": "docker run -p 5000:5000 -d $DOCKER_REPO",
* "docker:login": "docker login -u='$DOCKER_USERNAME' -p='$DOCKER_PASSWORD'",
* "docker:push": "docker push $DOCKER_REPO",
* "heroku:deploy": "sh ./travis/deploy_heroku.sh",
* "figlet": " ./node_modules/.bin/figlet --f 'Straight'",
* "start": "npm run docs && npm run build-storybook && npm run prod:build && node server/server",
* "travis": "yarn flow && yarn lint && yarn test && yarn report-coverage && yarn cucumber yarn pa11y && yarn sitespeed && yarn firebase:build"

# Docker commands
* docker build -t sreeram/ecmascrypt .
* docker run -p 5000:5000 -d sreeram/ecmascrypt
* docker logs <containerId> -f --details -t
* docker exec -it <containerId> /bin/bash
* docker images
* docker ps
* docker stop <containerId>
* docker ps -aq
* docker stop $(docker ps -aq)
* docker rm $(docker ps -aq)
* docker rmi <imageID>
* docker run -p5000:5000 --rm -it sreeram/ecmascrypt:latest

# Environment variables
* CODECOV_KEY
* DOCKER_REPO
* DOCKER_USERNAME
* DOCKER_PASSWORD
* FIREBASE_APP
* FIREBASE_TOKEN
* HEROKU_API_KEY
* HEROKU_APP_NAME
* NODE_ENV
* BROWSERSTACK_USER
* BROWSERSTACK_KEY
* BLUEMIX_USER
* BLUEMIX_PASSWORD
* BLUEMIX_API_KEY
* BLUEMIX_ORGANIZATION
* BLUEMIX_SPACE

## Things to edit
* Environment Variables
* config/*
* variables/*
* appName in variables/common.js
* firebase.json
* app.json
* .firebaserc
* service-worker.js