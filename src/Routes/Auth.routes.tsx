import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register/Register";
import ForgotPassword from "../Components/Login/ForgotPassword/ForgotPassword";

const { Navigator, Screen } = createStackNavigator();

export default class AuthRoutes extends Component {
  render() {
    return (
      <Navigator initialRouteName="Login" headerMode="none">
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    );
  }
}
