import { ref } from "./const";
import { firestore } from "./firebase";
import InventoryService from "./inventory-service";

export const ORDER_STATUS = {
  PLACED: 'placed',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  PREPARING: 'preparing',
  DELIVERED: 'delivered',
}
class OrderService {

  createDocumentDataFromProducts(orderInfo, userInfo){
    const {userId: placedUserId,userName, email, address  } = userInfo
    return {
      total: orderInfo.total,
      status: ORDER_STATUS.PLACED,
      archived: false,
      placedUserId,
      userName,
      email,
      address,
      products: orderInfo.cart
    }
  }

  async creatOrderUnderUser(orderInfo, userInfo) {
    console.log(this.createDocumentDataFromProducts(orderInfo, userInfo))
    return ref().orders.add(this.createDocumentDataFromProducts(orderInfo, userInfo));
  }

  async changeItemsInInventory(orderInfo) {
    const { cart } = orderInfo
    const inventoryInfo = cart.map(({productId, quantity}) => ({
        changeInQuantity: -1 * quantity,
        productId,
    }))
    await InventoryService.updateProductQuantity(inventoryInfo)
  }
  async createOrder(orderInfo, userInfo){
    await this.creatOrderUnderUser(orderInfo, userInfo);
    await this.changeItemsInInventory(orderInfo);
  }

  getOrders = async (userId, archived) => {
    const snap = await ref().orders.where('placedUserId', '==', userId).where('archived', '==', archived).get()
    const orders = snap.docs.reduce((pre ,order) => {
        let {products, status} = order.data()
        products = products.map((product) => ({...product, status}))
        return [...pre, ...products]
    }, [])
    return orders
  }

  async getCurrentOrder(userId){
    return this.getOrders(userId, false)
  }

  async getPastOrder(userId){
    return this.getOrders(userId, true)
  }
}

export default new OrderService()