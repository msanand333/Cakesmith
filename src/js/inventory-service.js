import firebase from "@firebase/app"
import { ref } from "./const"
import { firestore } from "./firebase"

class InventoryService {
  updateProductQuantity(productInfo){
    productInfo.forEach(async ({productId, changeInQuantity}) => {
      console.log(changeInQuantity)
      await ref().inventory.doc(productId).update('items', firebase.firestore.FieldValue.increment(changeInQuantity))
    })
  }
}

export default new InventoryService()