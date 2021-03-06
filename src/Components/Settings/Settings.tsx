import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import { BGI, GenericBox, Text, TextInput, TouchableOpacity } from "../../Shared/StyledComponents";
import AuthService from "../../Services/AuthService";
import { Alert } from "react-native";
import { Consumer } from "../../Context/User/UserProvider.context";

export default class Settings extends Component {
  state = {
    displayName: "",
    isLoading: false,
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
      this.setState({ isLoading: true });
      AuthService.redefineDisplayName(this.state.displayName, setName)
        .then(response => Alert.alert("Sucesso!", response, [{ text: "Ok" }]))
        .catch(e => Alert.alert("Erro de formulário", e, [{ text: "Ok" }]))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    return (
      <Consumer>
        {(context: any) => (
          <BGI source={MainTheme.bgi}>
            <Text bold alignSelf="center" fontSize={32}>
              Olá {context.name || context.email}!
            </Text>
            <GenericBox color={MainTheme.secondary}>
              <Text>Novo display name:</Text>
              <TextInput
                opaque
                placeholder="Display name"
                onChangeText={(text: string) => this.setState({ displayName: text })}
              />

              <TouchableOpacity
                alignSelf="center"
                onPress={() => this.validateForm(context.actions.setName)}
                disabled={this.state.isLoading}
              >
                <Text>Atualizar nome</Text>
              </TouchableOpacity>
            </GenericBox>
            <TouchableOpacity onPress={() => this.handleLogout()} disabled={this.state.isLoading}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </BGI>
        )}
      </Consumer>
    );
  }
}
