import "react-native-gesture-handler";
import "./src/Services/FirebaseService";
import React, { Component } from "react";
import { Text } from "./src/Shared/StyledComponents";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "./src/Shared/ColorPalette";
import Router from "./src/Routes/Router";
import UserProvider from "./src/Context/User/UserProvider";

export default class App extends Component {
  render() {
    return (
      <UserProvider>
        <ThemeProvider theme={MainTheme}>
          <>
            <Router />
            {/* <Text dark>
            Background vector created by freepik - www.freepik.com -
            https://www.freepik.com/vectors/background
          </Text> */}
          </>
        </ThemeProvider>
      </UserProvider>
    );
  }
}
