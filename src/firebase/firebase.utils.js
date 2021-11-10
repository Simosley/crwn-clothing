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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
})
    } catch (error){
      console.log('error creating user', error.message);

    }
  }
  return userRef
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
