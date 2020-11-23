import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import {
  Text,
  TouchableOpacity,
  View,
  GenericCard,
  ScrollView,
} from "../../Shared/StyledComponents";

export default class Group extends Component<any> {
  groupList: string[] = [
    "Desenvolvimento Web",
    "Engenharia de Requisitos",
    "Fundamentos do Design",
    "Banco de Dados I",
    "Teoria da Complexidade",
    "Metodologia Científica",
    "Semiótica e Percepção",
  ];

  render() {
    return (
      <View color={MainTheme.primary}>
        <ScrollView>
          {this.groupList.map((group, index) => (
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
      </View>
    );
  }
}
