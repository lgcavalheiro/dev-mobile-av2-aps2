import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";

export default class Router extends Component {
  isAuth = false;

  render() {
    return (
      <NavigationContainer>{this.isAuth ? <AuthRoutes /> : <AppRoutes />}</NavigationContainer>
    );
  }
}
