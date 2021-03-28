import firebase from "@firebase/app";
import '@firebase/auth'
import '@firebase/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { ref } from "./const";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

export default function firebaseInit () {
  const firebaseConfig = {
    apiKey: "AIzaSyDTEoYjldyVJUKiRoPI6kQ_6x6IWVGPasc",
    authDomain: "just-cakes.firebaseapp.com",
    projectId: "just-cakes",
    storageBucket: "just-cakes.appspot.com",
    messagingSenderId: "11696609964",
    appId: "1:11696609964:web:bf9b63bbc4cf390e805d09"
  };
  firebase.initializeApp(firebaseConfig);
  if (window.location.hostname === 'localhost') {
    const db = firebase.firestore()
    db.settings({
      host: 'localhost:8080',
      ssl: false,
    })
    firebase.auth().useEmulator('http://localhost:9099/')
  }
  // Initialize Firebase
}


export async function signInWithGoogle () {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
}

export function useAuth() {
    const [user, loading, error] = useAuthState(firebase.auth())
    return [user, loading, error]
}

const firestore = () => firebase.firestore()

export async function getCurrentUserInfo() {
  const {email, displayName, uid} = firebase.auth().currentUser
  return {
    email,
    userName: displayName,
    userId: uid
  }
}

export {firestore};

window.firebase = firebase