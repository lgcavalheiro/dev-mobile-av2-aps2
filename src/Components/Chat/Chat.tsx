import "firebase/firestore";
import firebase from "firebase";
import React, { Component } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { MainTheme } from "../../Shared/ColorPalette";
import { Consumer } from "../../Context/User/UserProvider.context";
import { BGI, ButtonGroup, Text, TextInput, TouchableOpacity } from "../../Shared/StyledComponents";
import { ChatState } from "./Chat.type";
import { ChatLog } from "./Chat.style";
import { Message } from "./ChatMessage/ChatMessage.type";
import ChatMessage from "./ChatMessage/ChatMessage";

export default class Chat extends Component {
  state: ChatState = {
    text: "",
    author: "",
    timestamp: undefined,
    messageLog: undefined,
    isLoading: false,
  };

  unsubscribeMessageListener!: firebase.Unsubscribe;

  componentDidMount() {
    this.unsubscribeMessageListener = firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot(
        snap => this.onSnapshotUpdate(snap),
        e => console.log(e)
      );
  }

  componentWillUnmount() {
    this.unsubscribeMessageListener();
  }

  private onSnapshotUpdate(
    snap: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  ) {
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
  }

  private handleAddMessage() {
    let { text, author } = this.state;
    this.setState({ isLoading: true });
    firebase
      .firestore()
      .collection("messages")
      .add({ text, author, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
      .then(() => this.setState({ text: "" }))
      .catch(e =>
        Alert.alert("Erro de char", e, [
          {
            text: "Ok",
          },
        ])
      )
      .finally(() => this.setState({ isLoading: false }));
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

            {this.state.isLoading ? (
              <ActivityIndicator color={MainTheme.primary} />
            ) : (
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
            )}
          </BGI>
        )}
      </Consumer>
    );
  }
}
