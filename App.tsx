import "react-native-gesture-handler";
import "./src/Services/FirebaseService";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "./src/Shared/ColorPalette";
import Router from "./src/Routes/Router";
import UserProvider from "./src/Context/User/UserProvider";

import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
const _console = { ...console };
console.warn = (message: string | string[]) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default class App extends Component {
  render() {
    return (
      <UserProvider>
        <ThemeProvider theme={MainTheme}>
          <Router />
        </ThemeProvider>
      </UserProvider>
    );
  }
}
