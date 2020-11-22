import firebase from "firebase";
import "firebase/auth";

export default class AuthService {
  public static login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => console.log("USER JWT: ", response.user?.getIdToken))
      .catch(error => console.log(error));
  }

  public static logout() {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Logged out successfully"))
      .catch(error => console.log(error));
  }

  public static register(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("USER JWT: ", response.user?.getIdToken);
        response.user?.updateProfile({ displayName: "TEST DISPLAY NAME REPLACE LATER ".trim() });
      })
      .catch(error => console.log(error));
  }
}
