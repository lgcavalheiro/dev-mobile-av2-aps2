import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";

import { BGI, Text } from "../../Shared/StyledComponents";

export default class Settings extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <BGI source={MainTheme.bgi}>
        <Text>SETTINGS COMPONENT</Text>
      </BGI>
    );
  }
}
