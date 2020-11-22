import React, { Component } from "react";
import { MainTheme } from "../../Shared/ColorPalette";
import { Consumer } from "../../Context/UserProvider";
import { BGI, ButtonGroup, Text, TextInput, TouchableOpacity } from "../../Shared/StyledComponents";
import { ChatState } from "./Chat.type";
import { ChatLog } from "./Chat.style";
import { Message } from "./ChatMessage/ChatMessage.type";
import ChatMessage from "./ChatMessage/ChatMessage";
import firebase from "firebase";
import "firebase/firestore";

export default class Chat extends Component {
  state: ChatState = {
    text: "",
    author: "",
    timestamp: undefined,
    messageLog: undefined,
  };

  unsubscribeMessageListener!: firebase.Unsubscribe;

  componentDidMount() {
    this.unsubscribeMessageListener = firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot(
        snap => {
          let data: Message[] = snap.docs.map(
            (doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {
              let { text, author, timestamp } = doc.data();
              let temp: Message = {
                id: doc.id,
                text,
                author,
                timestamp,
              };
              return temp;
            }
          );
          this.setState({ messageLog: data });
        },
        e => console.log(e)
      );
  }

  componentWillUnmount() {
    this.unsubscribeMessageListener();
  }

  private handleAddMessage() {
    let { text, author } = this.state;
    firebase
      .firestore()
      .collection("messages")
      .add({ text, author, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
      .then(() => this.setState({ text: "" }))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Consumer>
        {(context: any) => (
          <BGI source={MainTheme.bgi}>
            <ChatLog>
              {this.state.messageLog?.map((m: Message) => (
                <ChatMessage key={m.id} isOwner={context.name === m.author} message={m} />
              ))}
            </ChatLog>
            <ButtonGroup>
              <TextInput
                opaque
                placeholder="Digite sua mensagem"
                onChangeText={(text: string) => this.setState({ text: text })}
                value={this.state.text}
              />
              <TouchableOpacity
                onPress={() => {
                  this.setState({ author: context.name }, () => this.handleAddMessage());
                }}
                disabled={this.state.text!.length === 0}
              >
                <Text>Enviar</Text>
              </TouchableOpacity>
            </ButtonGroup>
          </BGI>
        )}
      </Consumer>
    );
  }
}
