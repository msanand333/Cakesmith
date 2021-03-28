import {useState, useEffect} from 'react'
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { ref } from 'js/const';
import {findByProductId} from '../context/cart-context'
import { toast } from 'react-toastify';
import { firestore, getCurrentUserInfo } from 'js/firebase';
import OrderService from 'js/order-service';

const VALID_CARD = '111'


export function useCheckout() {
  const [address, setAddress] = useState('')
  const [zip, setZip] = useState('')
  const [card, setCard] = useState('')
  
  const [canProceedToPay, setProceedToPay] = useState(false)
  
  const [snapshot] = useCollectionOnce(ref().inventory);
  const allProducts = snapshot?.docs?.map((doc) => ({...doc.data(), productId: doc.id})) ?? []
  
  const checkInventory = (productInCart) => {
    
    const isAvailableInInventory = (product) => {
      const cartQuant = product.quantity;
      const inventoryQuantity = findByProductId(allProducts, product.productId)?.items || 0
      return cartQuant <= inventoryQuantity
    }
    
    const isAvailable = productInCart.every(isAvailableInInventory)
    console.log(isAvailable)
    
    if(!isAvailable) {
      toast('Someone ordered while you where browsing');
      return false
    } 
    
    setProceedToPay(true)
    return true
  }
  
  const onPaymentSuccess = async (cart) => {
    try{
      const userInfo = { ...await getCurrentUserInfo(), address}
      const orderInfo = {
        total: cart.total,
        cart: cart.products,
      }
      await OrderService.createOrder(orderInfo, userInfo)
      toast('Successfully placed order')
    }catch{
      toast('Failed creating order')
    }
  }

  const isCardValid = (card) => card === VALID_CARD
  
  return {
    setAddress,
    address,
    zip,
    setZip,
    card, setCard,
    canProceedToPay, 
    checkInventory,
    onPaymentSuccess,
    isCardValid,
  }
}