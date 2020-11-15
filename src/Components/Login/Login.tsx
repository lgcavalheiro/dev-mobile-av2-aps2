import React, { Component } from "react";
import { Image, ActivityIndicator } from "react-native";
import {
  Text,
  GenericBox,
  ButtonGroup,
  TextInput,
  TextButton,
} from "../../Shared/StyledComponents";
import { MainTheme } from "../../Shared/ColorPalette";

import { UserButton, LoginButton } from "./Login.style";
import { LoginState } from "./Login.type";

import logo from "../../../assets/logo.png";

//import context user

export default class Login extends Component {
  state: LoginState = {
    scope: "student",
  };

  render() {
    return (
      <>
        <Image source={logo} style={{ width: 300, height: 100 }} />
        <Text>Problemas para formar</Text>
        <Text>um trabalho em grupo?</Text>
        <Text>
          O <Text bold>Grupou!</Text> resolve!
        </Text>

        <GenericBox>
          <ButtonGroup>
            <UserButton
              color={MainTheme.background}
              onPress={() => this.setState({ scope: "student" })}
              lastClick={this.state.scope == "student" ? true : false}
            >
              <Text dark>Aluno</Text>
            </UserButton>
            <UserButton
              color={MainTheme.background}
              onPress={() => this.setState({ scope: "teacher" })}
              lastClick={this.state.scope == "teacher" ? true : false}
            >
              <Text dark>Professor</Text>
            </UserButton>
          </ButtonGroup>

          <Text dark>Email</Text>
          <TextInput
            placeholder="Email"
            onChangeText={(text: any) => this.setState({ email: text })}
            value={this.state.email}
          />
          <Text dark>Senha</Text>
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text: any) => this.setState({ password: text })}
            value={this.state.password}
          />

          <TextButton>
            <Text customColor={MainTheme.primary} rightAligned>
              esqueci minha senha
            </Text>
          </TextButton>

          <ButtonGroup>
            <LoginButton color={MainTheme.background}>
              <Text customColor={MainTheme.primary}>Cadastre-se</Text>
            </LoginButton>
            <LoginButton>
              <Text>Entrar</Text>
            </LoginButton>
          </ButtonGroup>
        </GenericBox>
      </>
    );
  }
}
