import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ChatRoutes from "./Chat.routes";
import Settings from "../Components/Settings/Settings";
import { MainTheme } from "../Shared/ColorPalette";

const { Navigator, Screen } = createBottomTabNavigator();

export default class AppRoutes extends Component {
  private getTabStyle(color: string, name: string) {
    return <MaterialCommunityIcons name={name} size={32} color={color} />;
  }

  render() {
    return (
      <Navigator
        initialRouteName="Grupos"
        tabBarOptions={{
          activeTintColor: MainTheme.primary,
          inactiveTintColor: MainTheme.grey,
          style: { backgroundColor: MainTheme.quarternary },
        }}
      >
        <Screen
          name="Grupos"
          component={ChatRoutes}
          options={{
            tabBarIcon: ({ color }) => this.getTabStyle(color, "chat"),
          }}
        />
        <Screen
          name="Opções"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => this.getTabStyle(color, "settings"),
          }}
        />
      </Navigator>
    );
  }
}
