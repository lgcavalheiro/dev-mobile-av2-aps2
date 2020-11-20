import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { Consumer } from "../Context/UserProvider";

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Consumer>{(context: any) => (context.isAuth ? <AppRoutes /> : <AuthRoutes />)}</Consumer>
      </NavigationContainer>
    );
  }
}
