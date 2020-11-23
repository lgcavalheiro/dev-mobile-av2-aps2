import firebase from "firebase";
import "firebase/auth";

export default class AuthService {
  public static login(email: string, password: string): Promise<string | boolean> {
    return new Promise<string | boolean>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve(true))
        .catch(error => reject(`Erro ao logar:\n ${error}`));
    });
  }

  public static logout(): Promise<string | boolean> {
    return new Promise<string | boolean>((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => resolve(true))
        .catch(error => reject(`Error ao fazer logout:\n ${error}`));
    });
  }

  public static register(
    email: string,
    password: string,
    displayName: string,
    setName: Function
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          response.user
            ?.updateProfile({ displayName })
            .then(() => {
              setName(displayName);
              resolve("Conta cadastrada com sucesso!");
            })
            .catch(e => reject(`Oops! Houve um erro ao cadastrar sua conta:\n ${e}`));
        })
        .catch(e => reject(`Oops! Houve um erro ao cadastrar sua conta:\n ${e}`));
    });
  }

  public static resetPassword(email: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      firebase.auth().useDeviceLanguage();
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() =>
          resolve(
            "Enviamos o email de reset de senha para o email informado. Olhe sua caixa de entrada! :)"
          )
        )
        .catch(e => reject(`Oops! Houve um erro :( \n ${e})`));
    });
  }
}
