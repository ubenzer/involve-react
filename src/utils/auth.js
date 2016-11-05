export function ensureAnonymousLogin(store, onSuccess, onFail) {
  const state = store.getState();
  if (state.firebase.auth) {
    onSuccess();
  } else {
    store.firebase.auth().signInAnonymously()
      .then(onSuccess)
      .catch(onFail);
  }
}
