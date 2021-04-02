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

  transformProduct(productInfo) {
    const info = JSON.parse(JSON.stringify(productInfo))
    info['items'] = Number(info.items)
    info['cost'] = Number(info.cost)
    return info
  }

  async updateProduct(productId, productInfo) {
    return ref().inventory.doc(productId).update(this.transformProduct(productInfo))
  }

  async addProduct(productInfo) {
    return ref().inventory.add(this.transformProduct(productInfo))
  }

  getProductRef(productId){
    return ref().inventory.doc(productId)
  }
}

export default new InventoryService()