import React, { useState, useContext, Component } from "react";
import { Image, ActivityIndicator } from "react-native";
import { Text, TouchableOpacity, View } from "../Shared/StyledComponents";

import logo from "../../assets/logo.png";

//import context user

export default class Login extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image source={logo} />
      </View>
    );
  }
}
