import React, { Component } from "react";
import { Text } from "../../../Shared/StyledComponents";
import { Message } from "./ChatMessage.style";
import { ChatMessageProps } from "./ChatMessage.type";

export default class ChatMessage extends Component<ChatMessageProps> {
  private makeTimestamp(date: Date | undefined): String {
    if (!date) {
      return "timestamp não disponível";
    } else {
      return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
    }
  }

  private renderMessage() {
    return (
      <Message isOwner={this.props.isOwner}>
        <Text>{this.props.message.text}</Text>
        <Text>
          {this.props.message.author} @ {this.makeTimestamp(this.props.message.timestamp?.toDate())}
        </Text>
      </Message>
    );
  }

  render() {
    return this.renderMessage();
  }
}
