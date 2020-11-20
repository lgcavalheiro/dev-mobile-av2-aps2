import React, { Component } from "react";
import { Image, ActivityIndicator } from "react-native";
import {
  Text,
  GenericBox,
  ButtonGroup,
  TextInput,
  TextButton,
  BGI,
} from "../../Shared/StyledComponents";
import { MainTheme } from "../../Shared/ColorPalette";

import { UserButton, LoginButton } from "./Login.style";
import { LoginState } from "./Login.type";

import logo from "../../../assets/logo.png";

import { Consumer } from "../../Context/UserProvider";

export default class Login extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  state: LoginState = {
    scope: "student",
    isLoading: false,
  };

  private handleLogin(callback: Function) {
    console.log("LOGIN: ", this.state.email, this.state.password, this.state.scope);
    try {
      callback(this.state.email, this.state.password);
    } catch (e) {
      console.warn(e);
    }
  }

  private handleRegister(callback: Function) {
    console.log("REGISTER: ", this.state.email, this.state.password, this.state.scope);
    this.setState({ isLoading: true });
    try {
      callback(this.state.email, this.state.password);
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
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
            onChangeText={(text: string) => this.setState({ email: text })}
            value={this.state.email}
          />
          <Text dark>Senha</Text>
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text: string) => this.setState({ password: text })}
            value={this.state.password}
          />

          <TextButton>
            <Text customColor={MainTheme.primary} rightAligned>
              esqueci minha senha
            </Text>
          </TextButton>

          <Consumer>
            {(context: any) => (
              <ButtonGroup>
                <LoginButton
                  color={MainTheme.background}
                  onPress={() => this.handleRegister(context.actions.register)}
                  disabled={this.state.isLoading}
                >
                  {this.state.isLoading ? (
                    <ActivityIndicator color={MainTheme.primary} />
                  ) : (
                    <Text customColor={MainTheme.primary}>Cadastre-se</Text>
                  )}
                </LoginButton>
                <LoginButton
                  onPress={() => this.handleLogin(context.actions.login)}
                  disabled={this.state.isLoading}
                >
                  <Text>Entrar</Text>
                </LoginButton>
              </ButtonGroup>
            )}
          </Consumer>
        </GenericBox>
      </BGI>
    );
  }
}
