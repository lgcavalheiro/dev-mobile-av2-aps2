import firebase from "firebase";
import "firebase/firestore";

export default class FirestoreService {
  public static addToCollection(collection: string, payload: Object): Promise<string | boolean> {
    return new Promise<string | boolean>((resolve, reject) => {
      firebase
        .firestore()
        .collection(collection)
        .add({ ...payload, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
        .then(() => resolve(true))
        .catch(e => reject(e.toString()));
    });
  }

  public static subscribeToCollectionUpdate(
    collection: string,
    callback: Function
  ): firebase.Unsubscribe {
    return firebase
      .firestore()
      .collection(collection)
      .orderBy("timestamp")
      .onSnapshot(
        snap => callback(snap),
        e => console.log(e)
      );
  }
}
