import logo from "../../../assets/logo.png";
import React, { Component } from "react";
import { Image, ActivityIndicator, Alert } from "react-native";
import { withFormik } from "formik";
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
import { LoginForm } from "./Login.type";
import AuthService from "../../Services/AuthService";

class Login extends Component<any> {
  componentDidMount() {
    this.props.setFieldValue("callback", this.handleLogin);
  }

  private handleLogin(email: string, password: string) {
    AuthService.login(email, password)
      .then(() => true)
      .catch(e =>
        Alert.alert("Erro de autenticação", e, [
          {
            text: "Ok",
          },
        ])
      );
  }

  private getTranslatedScope() {
    return this.props.values.scope === "student" ? "aluno" : "professor";
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
              onPress={() => this.props.setFieldValue("scope", "student")}
              lastClick={this.props.values.scope == "student" ? true : false}
            >
              <Text dark>Aluno</Text>
            </UserButton>
            <UserButton
              color={MainTheme.background}
              onPress={() => this.props.setFieldValue("scope", "teacher")}
              lastClick={this.props.values.scope == "teacher" ? true : false}
            >
              <Text dark>Professor</Text>
            </UserButton>
          </ButtonGroup>

          <Text customColor={MainTheme.danger}>{this.props.errors.email}</Text>
          <TextInput
            placeholder="Email"
            onChangeText={(text: string) => this.props.setFieldValue("email", text.trim())}
          />

          <Text customColor={MainTheme.danger}>{this.props.errors.password}</Text>
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text: string) => this.props.setFieldValue("password", text.trim())}
          />

          <TextButton onPress={() => this.props.navigation.navigate("ForgotPassword")}>
            <Text customColor={MainTheme.primary} rightAligned>
              esqueci minha senha
            </Text>
          </TextButton>

          {this.props.values.isLoading ? (
            <ActivityIndicator color={MainTheme.primary} />
          ) : (
            <ButtonGroup>
              <LoginButton
                color={MainTheme.background}
                onPress={() =>
                  this.props.navigation.navigate("Register", {
                    scope: this.getTranslatedScope(),
                  })
                }
                disabled={this.props.values.isLoading}
              >
                <Text customColor={MainTheme.primary}>
                  Cadastre-se como {this.getTranslatedScope()}
                </Text>
              </LoginButton>

              <LoginButton
                onPress={() => this.props.handleSubmit()}
                disabled={this.props.values.isLoading}
              >
                <Text>Entrar como {this.getTranslatedScope()}</Text>
              </LoginButton>
            </ButtonGroup>
          )}
        </GenericBox>
      </BGI>
    );
  }
}

export default withFormik<any, any, any>({
  mapPropsToValues: () => ({ email: "", password: "", isLoading: false, scope: "student" }),
  validate: (values: LoginForm, { props }) => {
    const error: LoginForm = {};

    if (!values.email?.trim()) {
      error.email = "Campo email é obrigatório";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email.trim()
      )
    ) {
      error.email = "Email inválido";
    }

    if (!values.password?.trim()) {
      error.password = "Campo senha é obrigatório";
    } else if (values.password.trim().length < 6) {
      error.password = "Senha deve conter no mínimo 6 caracteres";
    }

    return error;
  },
  handleSubmit: async (values: LoginForm, { props, setFieldValue }) => {
    let { email, password, callback } = values;
    setFieldValue("isLoading", true);
    await callback!(email, password);
    setFieldValue("isLoading", false);
  },
})(Login);
