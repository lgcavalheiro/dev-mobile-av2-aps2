import React, { Component } from "react";
import { Consumer } from "../../Context/User/UserProvider.context";
import { MainTheme } from "../../Shared/ColorPalette";
import {
  Text,
  TouchableOpacity,
  GenericCard,
  ScrollView,
  BGI,
} from "../../Shared/StyledComponents";
import { CreateGroupButton } from "./Group.style";
import { IGroup } from "./Group.type";

export default class Group extends Component<any> {
  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <Consumer>
          {(context: any) => (
            <ScrollView>
              {context.groupList.map((group: IGroup, index: number) => (
                <GenericCard key={index}>
                  <Text dark marginBottom={16} fontSize={16}>
                    {group.name}
                  </Text>
                  <Text customColor={MainTheme.secondary} marginBottom={16} fontSize={16}>
                    {group.description || "Sem descrição"}
                  </Text>
                  <TouchableOpacity
                    alignSelf="flex-end"
                    onPress={() => this.props.navigation.navigate("Chat", { group: group.name })}
                  >
                    <Text>Entrar no chat</Text>
                  </TouchableOpacity>
                </GenericCard>
              ))}
            </ScrollView>
          )}
        </Consumer>

        <CreateGroupButton onPress={() => this.props.navigation.navigate("CreateGroup")}>
          <Text fontSize={32}>+</Text>
        </CreateGroupButton>
      </BGI>
    );
  }
}
