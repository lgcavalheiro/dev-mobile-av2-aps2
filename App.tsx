import React, { Component } from "react";
import { View } from "./src/Shared/StyledComponents";
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
        <View>
          <Login />
        </View>
      </ThemeProvider>
    );
  }
}
