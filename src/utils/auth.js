import firebase from "firebase";

export function ensureAnonymousLogin(store, onSuccess, onFail) {
  const state = store.getState();
  if (state.firebase.auth) {
    // dude is already logged
    onSuccess();
  } else if (state.firebase.auth === null) {
    // dude is not logged in yet, lets log him in
    firebase.auth().signInAnonymously()
      .then(onSuccess)
      .catch(onFail);
  } else {
    // we don't know the login status yet, let's wait for it
    let cancelFn = firebase.auth()
      .onAuthStateChanged((auth) => {
        cancelFn();
        if (auth) {
          onSuccess();
        } else {
          firebase.auth().signInAnonymously()
            .then(onSuccess)
            .catch(onFail);
        }
      }, onFail);
  }
}
