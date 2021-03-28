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
}

export default new OrderService()