import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "../Components/Group/Chat/Chat";
import Group from "../Components/Group/Group";
import CreateGroup from "../Components/Group/CreateGroup/CreateGroup";

const { Navigator, Screen } = createStackNavigator();

export default class ChatRoutes extends Component {
  render() {
    return (
      <Navigator initialRouteName="Group" headerMode="none">
        <Screen name="Group" component={Group} />
        <Screen name="Chat" component={Chat} />
        <Screen name="CreateGroup" component={CreateGroup} />
      </Navigator>
    );
  }
}
