import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import { Consumer } from "../../Context/UserProvider";
import { BGI, Text, TouchableOpacity } from "../../Shared/StyledComponents";

export default class Chat extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {(context: any) => (
          <BGI source={MainTheme.bgi}>
            <Text>
              CHAT COMPONENT {context.name} {context.email}
            </Text>
            <TouchableOpacity onPress={() => context.actions.setName("Bob Butch")}>
              <Text>Change name</Text>
            </TouchableOpacity>
          </BGI>
        )}
      </Consumer>
    );
  }
}
