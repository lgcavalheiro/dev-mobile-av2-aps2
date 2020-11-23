import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import { BGI, Text, TouchableOpacity } from "../../Shared/StyledComponents";
import AuthService from "../../Services/AuthService";
import { Alert } from "react-native";

export default class Settings extends Component {
  private handleLogout() {
    AuthService.logout()
      .then(() => true)
      .catch(e => Alert.alert("Erro de logout", e, [{ text: "Ok" }]));
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <TouchableOpacity onPress={() => this.handleLogout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </BGI>
    );
  }
}
