import "firebase/auth";
import firebase from "firebase";
import React, { Component } from "react";
import { IUserContext } from "./UserProvider.type";
import { Provider } from "./UserProvider.context";

export default class UserProvider extends Component {
  state: IUserContext = {
    name: "",
    isAuth: false,
    actions: {
      setName: (name: string) => this.setState({ name }),
    },
  };

  unsubscribeAuthState!: firebase.Unsubscribe;

  componentDidMount() {
    this.unsubscribeAuthState = firebase
      .auth()
      .onAuthStateChanged((user: firebase.User | null) => this.onAuthStateChange(user));
  }

  componentWillUnmount() {
    if (this.unsubscribeAuthState) this.unsubscribeAuthState();
  }

  private onAuthStateChange(user: firebase.User | null) {
    user != null
      ? this.setState({ isAuth: true, name: user.displayName })
      : this.setState({ isAuth: false });
    return user;
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
