import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import {
  Text,
  TouchableOpacity,
  GenericCard,
  ScrollView,
  BGI,
} from "../../Shared/StyledComponents";

export default class Group extends Component<any> {
  state = {
    groupList: [
      "Desenvolvimento Web",
      "Engenharia de Requisitos",
      "Fundamentos do Design",
      "Banco de Dados I",
      "Teoria da Complexidade",
      "Metodologia Científica",
    ],
  };

  async componentDidMount() {
    try {
      let response = await fetch("https://10.0.0.2:3333/disciplines");
      let result = await response.json();
      this.setState({ groupList: result.data.map((d: { roomName: string }) => d.roomName) });
      console.log(result);
    } catch (e) {
      console.log("API request failed. Falling back to hardcoded data.");
    }
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <ScrollView>
          {this.state.groupList.map((group, index) => (
            <GenericCard key={index}>
              <Text dark marginBottom={16} fontSize={16}>
                {group}
              </Text>
              <TouchableOpacity
                alignSelf="flex-end"
                onPress={() => this.props.navigation.navigate("Chat", { group })}
              >
                <Text>Entrar no chat</Text>
              </TouchableOpacity>
            </GenericCard>
          ))}
        </ScrollView>
      </BGI>
    );
  }
}
