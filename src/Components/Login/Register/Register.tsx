import logo from "../../../../assets/logo.png";
import React, { Component } from "react";
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView } from "react-native";
import { withFormik } from "formik";
import { Text, ButtonGroup, TextInput, TouchableOpacity } from "../../../Shared/StyledComponents";
import { MainTheme } from "../../../Shared/ColorPalette";
import { RegisterForm } from "./Register.type";
import AuthService from "../../../Services/AuthService";
import { Consumer } from "../../../Context/User/UserProvider.context";

class Register extends Component<any> {
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: MainTheme.background,
        }}
      >
        <Image source={logo} style={{ width: 256, height: 80 }} />

        <Text dark>Olá novo {this.props.route.params.scope}!</Text>

        <Text dark marginLeft={-290} customColor={MainTheme.grey}>
          Nome
        </Text>
        <Text customColor={MainTheme.danger}>{this.props.errors.displayName}</Text>
        <TextInput
          width={330}
          placeholder="Nome"
          onChangeText={(text: string) => this.props.setFieldValue("displayName", text.trim())}
        />

        <Text dark marginLeft={-290} customColor={MainTheme.grey}>
          Email
        </Text>
        <Text customColor={MainTheme.danger}>{this.props.errors.email}</Text>
        <TextInput
          width={330}
          placeholder="Email"
          onChangeText={(text: string) => this.props.setFieldValue("email", text.trim())}
        />

        <Text dark marginLeft={-290} customColor={MainTheme.grey}>
          Senha
        </Text>
        <Text customColor={MainTheme.danger}>{this.props.errors.password}</Text>
        <TextInput
          width={330}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text: string) => this.props.setFieldValue("password", text.trim())}
        />

        <Text dark marginLeft={-226} customColor={MainTheme.grey}>
          Confirmar senha
        </Text>
        <Text customColor={MainTheme.danger}>{this.props.errors.passwordConfirm}</Text>
        <TextInput
          width={330}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          onChangeText={(text: string) => this.props.setFieldValue("passwordConfirm", text.trim())}
        />

        <ButtonGroup>
          <Consumer>
            {(context: any) => {
              return this.props.isSubmitting ? (
                <ActivityIndicator
                  color={MainTheme.secondary}
                  size={64}
                  style={{ padding: 16, alignSelf: "center" }}
                />
              ) : (
                <>
                  <TouchableOpacity
                    hasBorder
                    color={MainTheme.background}
                    onPress={() => this.props.navigation.goBack()}
                    disabled={this.props.isSubmitting}
                  >
                    <Text customColor={MainTheme.primary}>Voltar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.setFieldValue("callback", context.actions.setName);
                      this.props.handleSubmit();
                    }}
                    disabled={this.props.isSubmitting}
                  >
                    <Text bold>Concluir</Text>
                  </TouchableOpacity>
                </>
              );
            }}
          </Consumer>
        </ButtonGroup>
      </KeyboardAvoidingView>
    );
  }
}

export default withFormik<any, any, any>({
  mapPropsToValues: () => ({ email: "", password: "", passwordConfirm: "", displayName: "" }),
  validateOnBlur: false,
  validateOnChange: false,
  validate: (values: RegisterForm) => {
    const error: RegisterForm = {};

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
    } else if (values.password.trim() != values.passwordConfirm?.trim()) {
      error.password = "Senha e Confirmação de senha não conferem";
      error.passwordConfirm = "Senha e Confirmação de senha não conferem";
    } else if (values.password.trim().length < 6) {
      error.password = "Senha deve conter no mínimo 6 caracteres";
    }

    if (!values.displayName?.trim()) {
      error.displayName = "Campo nome é obrigatório";
    } else if (values.displayName.trim().length < 8) {
      error.displayName = "Nome deve conter no mínimo 8 caracteres";
    }

    return error;
  },
  handleSubmit: (values: RegisterForm, { setSubmitting }) => {
    let { displayName, email, password, callback } = values;

    AuthService.register(email!, password!, displayName!, callback!)
      .then(response =>
        Alert.alert("Cadastro ok!", response, [
          {
            text: "Ok",
          },
        ])
      )
      .catch(e =>
        Alert.alert("Erro de cadastro", e, [
          {
            text: "Ok",
          },
        ])
      )
      .finally(() => setSubmitting(false));
  },
})(Register);
