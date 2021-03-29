import firebase from "@firebase/app";
import '@firebase/firestore'

export const ref = () => ({
  inventory: firebase.firestore().collection('inventory'),
  orders: firebase.firestore().collection('orders'),
  user: firebase.firestore().collection('user'),
})