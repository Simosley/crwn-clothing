import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3An-wZTn48qDlMbrCxhaxivQrLrZdYYM",
  authDomain: "crwn-db-76085.firebaseapp.com",
  projectId: "crwn-db-76085",
  storageBucket: "crwn-db-76085.appspot.com",
  messagingSenderId: "985114467623",
  appId: "1:985114467623:web:4b03d75de2cff6c2aa1d02",
  measurementId: "G-6GGL176ZMK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
