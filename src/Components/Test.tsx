import React, { Component } from "react";
import { Text } from "../Shared/StyledComponents";

type Props = {
  message: String;
  reverse?: Boolean;
};

export default class TestComponent extends Component<Props> {
  message: String;

  constructor(props: Props) {
    super(props);
    this.message = props.reverse ? this.reverseMessage(props.message) : props.message;
  }

  private reverseMessage(message: String) {
    return message.split("").reverse().join();
  }

  render() {
    return <Text>{this.message}</Text>;
  }
}
