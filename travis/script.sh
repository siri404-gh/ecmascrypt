#!/bin/sh
yarn flow
yarn lint
yarn docs
yarn test
yarn report-coverage
yarn prod
yarn pa11y
yarn sitespeed
yarn firebase-deploy