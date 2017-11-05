import React from "react-native";
import App from "./src/components/mobile/app/app";

const { AppRegistry } = React;
const { appName } = require('./variables/common');

AppRegistry.registerComponent(appName, () => App);
