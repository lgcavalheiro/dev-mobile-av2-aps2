import logo from "../../../../assets/logo.png";
import React, { Component } from "react";
import { Image, ActivityIndicator, Alert } from "react-native";
import {
  Text,
  GenericBox,
  ButtonGroup,
  TextInput,
  TextButton,
  View,
  TouchableOpacity,
} from "../../../Shared/StyledComponents";
import { MainTheme } from "../../../Shared/ColorPalette";
import { RegisterState } from "./Register.type";

export default class Register extends Component<any> {
  state: RegisterState = {
    password: "",
    email: "",
    displayName: "",
    passwordConfirm: "",
  };

  render() {
    return (
      <View color={MainTheme.background}>
        <TouchableOpacity
          color={MainTheme.background}
          alignSelf={"flex-end"}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text dark fontSize={32}>
            &times;
          </Text>
        </TouchableOpacity>
        <Image source={logo} style={{ width: 256, height: 80 }} />

        <Text dark>Olá novo {this.props.route.params.scope}!</Text>

        <Text dark marginLeft={-290} customColor={MainTheme.grey}>
          Nome
        </Text>
        <TextInput
          width={92}
          height={8}
          placeholder="Nome"
          onChangeText={(text: string) => this.setState({ displayName: text })}
          value={this.state.displayName}
        />
        <Text dark marginLeft={-290} customColor={MainTheme.grey}>
          Email
        </Text>
        <TextInput
          width={92}
          height={8}
          placeholder="Email"
          onChangeText={(text: string) => this.setState({ email: text })}
          value={this.state.email}
        />
        <Text dark marginLeft={-290} customColor={MainTheme.grey}>
          Senha
        </Text>
        <TextInput
          width={92}
          height={8}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text: string) => this.setState({ password: text })}
          value={this.state.password}
        />
        <Text dark marginLeft={-226} customColor={MainTheme.grey}>
          Confirmar senha
        </Text>
        <TextInput
          width={92}
          height={8}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          onChangeText={(text: string) => this.setState({ passwordConfirm: text })}
          value={this.state.passwordConfirm}
        />

        <TouchableOpacity>
          <Text bold>Concluir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
