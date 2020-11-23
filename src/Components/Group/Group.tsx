import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import { Text, TouchableOpacity, View, GenericBox } from "../../Shared/StyledComponents";

export default class Group extends Component {
  groupList: string[] = [
    "Desenvolvimento Web",
    "Engenharia de Requisitos",
    "Fundamentos do Design",
    "Banco de Dados I",
  ];

  render() {
    return (
      <View>
        {this.groupList.map(group => (
          <GenericBox>
            <Text>{group}</Text>
          </GenericBox>
        ))}
      </View>
    );
  }
}
