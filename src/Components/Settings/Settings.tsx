import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import { BGI, GenericBox, Text, TextInput, TouchableOpacity } from "../../Shared/StyledComponents";
import AuthService from "../../Services/AuthService";
import { Alert } from "react-native";
import { SettingsState } from "./Settings.type";
import { Consumer } from "../../Context/User/UserProvider.context";

export default class Settings extends Component {
  state: SettingsState = {
    displayName: "",
  };

  private handleLogout() {
    AuthService.logout()
      .then(() => true)
      .catch(e => Alert.alert("Erro de logout", e, [{ text: "Ok" }]));
  }

  private validateForm(setName: Function) {
    if (this.state.displayName.trim().length < 8) {
      Alert.alert("Erro de formulário", "O novo nome deve conter no mínimo 8 caracteres", [
        { text: "Ok" },
      ]);
    } else {
      AuthService.redefineDisplayName(this.state.displayName, setName)
        .then(response => Alert.alert("Sucesso!", response, [{ text: "Ok" }]))
        .catch(e => Alert.alert("Erro de formulário", e, [{ text: "Ok" }]));
    }
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <TouchableOpacity onPress={() => this.handleLogout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <GenericBox color={MainTheme.secondary}>
          <Text>Novo display name:</Text>
          <TextInput
            opaque
            placeholder="Display name"
            onChangeText={(text: string) => this.setState({ displayName: text })}
          />
          <Consumer>
            {(context: any) => (
              <TouchableOpacity
                alignSelf="center"
                onPress={() => this.validateForm(context.actions.setName)}
              >
                <Text>Atualizar nome</Text>
              </TouchableOpacity>
            )}
          </Consumer>
        </GenericBox>
      </BGI>
    );
  }
}
