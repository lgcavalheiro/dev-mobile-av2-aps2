import React, { Component } from "react";
import { Text, BGI } from "./src/Shared/StyledComponents";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "./src/Shared/ColorPalette";
import Login from "./src/Components/Login/Login";

export default class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <BGI source={MainTheme.bgi}>
          <Login />
        </BGI>
        <Text dark>
          Background vector created by freepik - www.freepik.com -
          https://www.freepik.com/vectors/background
        </Text>
      </ThemeProvider>
    );
  }
}
