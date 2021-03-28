import firebase from "@firebase/app";
import '@firebase/firestore'

export const ref = () => ({
  inventory: firebase.firestore().collection('inventory')
})