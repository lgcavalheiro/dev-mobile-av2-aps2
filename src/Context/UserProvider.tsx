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

const login = (email: string, password: string) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(response => console.log("Logged out successfully", response))
    .catch(error => console.log(error));
};

const register = (email: string, password: string) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export default class UserProvider extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  state: IUserContext = {
    name: "",
    isAuth: false,
    actions: {
      setName: (newName: string) => this.setState({ name: newName }),
      login,
      logout,
      register,
    },
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      user != null
        ? this.setState({ isAuth: true, name: user.email })
        : this.setState({ isAuth: false });
      return user;
    });
  }

  render() {
    const { Provider } = userContext;

    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
