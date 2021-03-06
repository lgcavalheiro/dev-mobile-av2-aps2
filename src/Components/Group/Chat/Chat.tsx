import React, { Component } from "react";
import { ActivityIndicator, Alert, KeyboardAvoidingView } from "react-native";
import { MainTheme } from "../../../Shared/ColorPalette";
import { Consumer } from "../../../Context/User/UserProvider.context";
import {
  BGI,
  ButtonGroup,
  Text,
  TextInput,
  TouchableOpacity,
} from "../../../Shared/StyledComponents";
import { ChatState } from "./Chat.type";
import { ChatLog } from "./Chat.style";
import { Message } from "./ChatMessage/ChatMessage.type";
import ChatMessage from "./ChatMessage/ChatMessage";
import FirestoreService from "../../../Services/FirestoreService";

export default class Chat extends Component<any> {
  state: ChatState = {
    text: "",
    author: "",
    email: "",
    room: `messages-${this.props.route.params.group}`,
    timestamp: undefined,
    messageLog: undefined,
    isLoading: false,
  };

  unsubscribeMessageListener!: firebase.Unsubscribe;

  componentDidMount() {
    this.onSnapshotUpdate = this.onSnapshotUpdate.bind(this);
    this.unsubscribeMessageListener = FirestoreService.subscribeToCollectionUpdate(
      this.state.room,
      this.onSnapshotUpdate
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
        let { text, author, timestamp, email } = doc.data();
        let temp: Message = {
          id: doc.id,
          text,
          author,
          email,
          timestamp,
        };
        return temp;
      }
    );
    this.setState({ messageLog: data });
  }

  private handleAddMessage() {
    let { text, author, email } = this.state;
    this.setState({ isLoading: true });
    FirestoreService.addToCollection(this.state.room, { text, author, email })
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
            <KeyboardAvoidingView>
              {<Text bold alignSelf="center" fontSize={26} marginTop={42}>
                {this.props.route.params.group}
              </Text>}
              <ChatLog>
                {this.state.messageLog?.map((m: Message) => (
                  <ChatMessage key={m.id} isOwner={context.email === m.email} message={m} />
                ))}
              </ChatLog>

              {this.state.isLoading ? (
                <ActivityIndicator
                  color={MainTheme.secondary}
                  size={64}
                  style={{ padding: 16, alignSelf: "center" }}
                />
              ) : (
                <ButtonGroup>
                  <TouchableOpacity
                    color={MainTheme.secondary}
                    onPress={() => this.props.navigation.goBack()}
                  >
                    <Text>Voltar</Text>
                  </TouchableOpacity>

                  <TextInput
                    opaque
                    placeholder="Digite sua mensagem"
                    onChangeText={(text: string) => this.setState({ text: text })}
                    value={this.state.text}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ author: context.name, email: context.email }, () =>
                        this.handleAddMessage()
                      );
                    }}
                    disabled={this.state.text!.length === 0}
                  >
                    <Text>Enviar</Text>
                  </TouchableOpacity>
                </ButtonGroup>
              )}
            </KeyboardAvoidingView>
          </BGI>
        )}
      </Consumer>
    );
  }
}
