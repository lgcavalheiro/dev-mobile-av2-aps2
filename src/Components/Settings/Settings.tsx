import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import { BGI, Text, TouchableOpacity } from "../../Shared/StyledComponents";
import AuthService from "../../Services/AuthService";

export default class Settings extends Component {
  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <TouchableOpacity onPress={() => AuthService.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </BGI>
    );
  }
}
