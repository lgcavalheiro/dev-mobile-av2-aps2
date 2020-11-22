import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";

import { BGI, Text, TouchableOpacity } from "../../Shared/StyledComponents";

import AuthService from "../../Services/AuthService";

export default class Settings extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <Text>SETTINGS COMPONENT</Text>
        <TouchableOpacity onPress={() => AuthService.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </BGI>
    );
  }
}
