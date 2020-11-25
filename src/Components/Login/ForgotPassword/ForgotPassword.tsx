import React, { Component } from "react";
import { Alert } from "react-native";
import { Text, TextInput, View, TouchableOpacity } from "../../../Shared/StyledComponents";
import { MainTheme } from "../../../Shared/ColorPalette";
import AuthService from "../../../Services/AuthService";

export default class ForgotPassword extends Component<any> {
  state: { email: string } = {
    email: "",
  };

  private validateEmail(): boolean {
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      return true;
    } else {
      Alert.alert("Email inválido", "Por favor, digite um endereço de email válido", [
        {
          text: "Ok",
        },
      ]);
      return false;
    }
  }

  private sendPasswordResetRequest() {
    AuthService.resetPassword(this.state.email)
      .then(response => {
        Alert.alert("Email enviado!", response, [
          {
            text: "Ok",
          },
        ]);
        this.props.navigation.navigate("Login");
      })
      .catch(e =>
        Alert.alert("Oops!", e, [
          {
            text: "Ok",
          },
        ])
      );
  }

  render() {
    return (
      <View color={MainTheme.background} marginTop={64} padding={20}>
        <Text dark bold fontSize={32} marginBottom={16} customColor={MainTheme.primary}>
          Ajudaremos você a recuperar sua senha
        </Text>
        <Text dark fontSize={16} marginBottom={32}>
          Digite abaixo o email usado no cadastro da sua conta! :)
        </Text>

        <TextInput
          width={330}
          placeholder="Email"
          onChangeText={(text: string) => this.setState({ email: text.trim() })}
          value={this.state.email}
        />

        <TouchableOpacity
          onPress={() => {
            if (this.validateEmail()) this.sendPasswordResetRequest();
          }}
        >
          <Text>Envie-me um link de recuperação de senha!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          hasBorder
          alignSelf="flex-start"
          color={MainTheme.background}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text customColor={MainTheme.primary}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
