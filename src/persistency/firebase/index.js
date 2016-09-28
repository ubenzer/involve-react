import firebase from "firebase/firebase";

let firebaseInitDone = false;
let config = {
  apiKey: "AIzaSyBx_5pNM2LnOVRLnnpwYyeLOGVT3OSekG4",
  authDomain: "involve-7242f.firebaseapp.com",
  databaseURL: "https://involve-7242f.firebaseio.com",
  storageBucket: "involve-7242f.appspot.com",
  messagingSenderId: "936140078216"
};

export function init() {
  if (firebaseInitDone) { return; }
  firebaseInitDone = true;
  firebase.initializeApp(config);
}
