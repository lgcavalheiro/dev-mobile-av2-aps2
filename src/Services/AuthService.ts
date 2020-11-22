import firebase from "firebase";
import "firebase/auth";

export default class AuthService {
  public static login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => console.log("USER LOGGED: ", response.user?.providerId))
      .catch(error => console.log(error));
  }

  public static logout() {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Logged out successfully"))
      .catch(error => console.log(error));
  }

  public static register(email: string, password: string, displayName: string, setName: Function) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("USER LOGGED: ", response.user?.email);
        let display = displayName || response.user?.email?.split("@")[0];
        response.user?.updateProfile({ displayName: display }).then(() => setName(display));
        console.log(response.user?.displayName);
      })
      .catch(error => console.log(error));
  }
}
