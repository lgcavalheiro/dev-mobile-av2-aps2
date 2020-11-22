import logo from "../../../assets/logo.png";
import React, { Component } from "react";
import { Image, ActivityIndicator, Alert } from "react-native";
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
import AuthService from "../../Services/AuthService";
import { Consumer } from "../../Context/User/UserProvider.context";

export default class Login extends Component {
  state: LoginState = {
    scope: "student",
    isLoading: false,
  };

  private handleAuth(operation: string, setName?: Function) {
    this.setState({ isLoading: true });
    try {
      if (operation === "login") AuthService.login(this.state.email!, this.state.password!);
      else if (operation === "register")
        AuthService.register(this.state.email!, this.state.password!, "DISPLAY TEST ", setName!);
      else
        Alert.alert(
          "Erro de autenticação",
          "Operação de autenticação não reconhecida, por favor, aguarde e tente novamente.",
          [
            {
              text: "Ok",
            },
          ]
        );
    } catch (e) {
      Alert.alert("Erro de autenticação", e, [
        {
          text: "Ok",
        },
      ]);
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

          <ButtonGroup>
            {this.state.isLoading ? (
              <ActivityIndicator color={MainTheme.primary} />
            ) : (
              <>
                <Consumer>
                  {(context: any) => (
                    <LoginButton
                      color={MainTheme.background}
                      onPress={() => this.handleAuth("register", context.actions.setName)}
                      disabled={this.state.isLoading}
                    >
                      <Text customColor={MainTheme.primary}>Cadastre-se</Text>
                    </LoginButton>
                  )}
                </Consumer>
                <LoginButton
                  onPress={() => this.handleAuth("login")}
                  disabled={this.state.isLoading}
                >
                  <Text>Entrar</Text>
                </LoginButton>
              </>
            )}
          </ButtonGroup>
        </GenericBox>
      </BGI>
    );
  }
}
