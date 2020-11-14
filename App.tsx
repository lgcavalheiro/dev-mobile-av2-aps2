import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "./src/Shared/StyledComponents";
import TestComponent from "./src/Components/Test";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "./src/Shared/ColorPalette";
import Login from "./src/Components/Login";

export default class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <View>
          <Login />
          <Text>Open up App.tsx to start working on your app!</Text>
          <TouchableOpacity>
            <Text color="#fff">Henlo</Text>
          </TouchableOpacity>
          <TestComponent message="Hello from test component!" />
        </View>
      </ThemeProvider>
    );
  }
}
