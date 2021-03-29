import firebase from "@firebase/app"
import { ref } from "./const"

class InventoryService {

  updateProductQuantity(productInfo){
    productInfo.forEach(async ({productId, changeInQuantity}) => {
      await ref().inventory.doc(productId).update('items', firebase.firestore.FieldValue.increment(changeInQuantity))
    })
  }

  async getAllProducts() {
    const snap = await ref().inventory.get()
    return snap.docs.map((product) => ({
      ...product.data(),
      id: product.id
    }))
  }
}

export default new InventoryService()