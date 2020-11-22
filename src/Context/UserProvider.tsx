import React, { Component, createContext } from "react";
import firebase from "firebase";
import "firebase/auth";

const userContext = createContext({});

export interface IUserContext {
  name: string;
  isAuth: boolean;
  user?: any;
  actions?: Object;
}

export const { Consumer } = userContext;

export default class UserProvider extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  state: IUserContext = {
    name: "",
    isAuth: false,
    actions: {
      setName: (newName: string) => this.setState({ name: newName }),
    },
  };

  unsubscribeAuthState!: firebase.Unsubscribe;

  componentDidMount() {
    this.unsubscribeAuthState = firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      user != null
        ? this.setState({ isAuth: true, name: user.displayName || user.email?.split("@")[0] })
        : this.setState({ isAuth: false });
      return user;
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeAuthState) this.unsubscribeAuthState();
  }

  render() {
    const { Provider } = userContext;

    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
