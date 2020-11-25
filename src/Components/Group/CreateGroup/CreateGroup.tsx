import React, { Component, useCallback } from "react";
import { Alert } from "react-native";
import { Consumer } from "../../../Context/User/UserProvider.context";
import { MainTheme } from "../../../Shared/ColorPalette";
import {
  Text,
  BGI,
  GenericBox,
  TextInput,
  ButtonGroup,
  TouchableOpacity,
} from "../../../Shared/StyledComponents";
import { IGroup } from "../Group.type";

export default class CreateGroup extends Component<any> {
  state = {
    name: "",
    description: "",
  };

  componentDidMount() {
    console.log("WTATDTFASTDAS: ", this.state);
  }

  private validateForm(callback: Function) {
    if (!this.state.name) {
      Alert.alert("Erro de formulário", "Campo 'Nome do grupo' é mandatório", [{ text: "Ok" }]);
    } else if (this.state.name.length < 8) {
      Alert.alert(
        "Erro de formulário",
        "Campo 'Nome do grupo' deve conter no mínimo 8 caracteres",
        [{ text: "Ok" }]
      );
    } else {
      callback(this.state);
      Alert.alert("Grupo criado!", `Grupo ${this.state.name} criado com sucesso`, [
        { text: "Ok", onPress: () => this.props.navigation.goBack() },
      ]);
    }
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <GenericBox>
          <Text
            customColor={MainTheme.quarternary}
            bold
            alignSelf="center"
            fontSize={32}
            marginBottom={32}
          >
            Criar novo grupo
          </Text>

          <Text dark>Nome do grupo</Text>
          <TextInput
            marginBottom={32}
            placeholder="Nome do grupo"
            onChangeText={(text: string) => this.setState({ name: text })}
            value={this.state.name}
          />

          <Text dark>Descrição do grupo</Text>
          <TextInput
            marginBottom={32}
            placeholder="Descrição do grupo"
            onChangeText={(text: string) => this.setState({ description: text })}
            value={this.state.description}
          />

          <ButtonGroup jc="center">
            <TouchableOpacity
              hasBorder
              color={MainTheme.background}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text customColor={MainTheme.primary}>Voltar</Text>
            </TouchableOpacity>

            <Consumer>
              {(context: any) => (
                <TouchableOpacity onPress={() => this.validateForm(context.actions.addGroup)}>
                  <Text>Criar grupo</Text>
                </TouchableOpacity>
              )}
            </Consumer>
          </ButtonGroup>
        </GenericBox>
      </BGI>
    );
  }
}
