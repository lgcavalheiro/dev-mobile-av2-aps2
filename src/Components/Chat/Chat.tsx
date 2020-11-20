import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";

import { BGI, Text } from "../../Shared/StyledComponents";

export default class Chat extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <Text>CHAT COMPONENT</Text>
      </BGI>
    );
  }
}
