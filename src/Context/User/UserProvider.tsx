import React, { Component } from "react";
import { IUserContext } from "./UserProvider.type";
import { Provider } from "./UserProvider.context";
import { IGroup } from "../../Components/Group/Group.type";
import AuthService from "../../Services/AuthService";

export default class UserProvider extends Component {
  state: IUserContext = {
    name: "",
    email: "",
    isAuth: false,
    groupList: [
      {
        name: "Desenvolvimento Web",
        description: "Desenvolvimento web moderno",
      },
      {
        name: "Engenharia de Requisitos",
        description: "",
      },
      {
        name: "Fundamentos do Design",
        description: "Desenvolvimento web moderno",
      },
      {
        name: "Banco de Dados I",
        description: "Utilizando MySQL",
      },
      {
        name: "Metodologia Científica",
        description: "",
      },
      {
        name: "Teoria da Complexidade",
        description: "Abandon hope all ye who enter here",
      },
    ],
    actions: {
      setName: (name: string) => this.setState({ name }),
      addGroup: (newGroup: IGroup) =>
        this.setState((prev: any) => {
          return {
            groupList: [...prev.groupList, newGroup],
          };
        }),
    },
  };

  unsubscribeAuthState!: firebase.Unsubscribe;

  componentDidMount() {
    this.onAuthStateChange = this.onAuthStateChange.bind(this);
    this.unsubscribeAuthState = AuthService.subscribeToAuthState(this.onAuthStateChange);
  }

  componentWillUnmount() {
    if (this.unsubscribeAuthState) this.unsubscribeAuthState();
  }

  private onAuthStateChange(user: firebase.User | null) {
    user != null
      ? this.setState({ isAuth: true, name: user.displayName, email: user.email })
      : this.setState({ isAuth: false });
    return user;
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
