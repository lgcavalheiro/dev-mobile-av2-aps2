import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";

import { BGI, Text, TouchableOpacity } from "../../Shared/StyledComponents";

import { Consumer } from "../../Context/UserProvider";

export default class Settings extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <Consumer>
          {(context: any) => (
            <>
              <Text>SETTINGS COMPONENT</Text>
              <TouchableOpacity onPress={() => context.actions.logout()}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </>
          )}
        </Consumer>
      </BGI>
    );
  }
}
