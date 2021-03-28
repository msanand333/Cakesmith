import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

/**
 * @typedef {Object} CartProduct
 * @property {String} name
 * @property {String} productId
 * @property {Number} quantity
 * @property {Number} total
 * @property {Number} perCost
 * @property {String} imgUrl
 */

/**
 * @typedef {Array<CartProduct>} CartProducts
 */

export const findByProductId = (products, productId) => {
  const product = products.filter((p) => p.productId === productId)
  return product[0]
}

const findIndexByProductId = (products, productId) => {
  const id = products.findIndex((p) => p.productId === productId)
  return id
}

const calculateTotal = (products) => {
  return products.map((product) => {
    const { quantity } = product
    const { perCost } = product
    return { ...product, total: quantity * perCost}
  })
}

const useCart = () => {
  /** @type { [CartProducts, (CartProducts) => CartProducts ] } */
  const [products, setProducts] = useState([ ])
  const [total, setTotal] = useState(0)

  const updateQuantity = (productId, quantity) => {
    let nextState = JSON.parse(JSON.stringify(products));
    const product = findByProductId(nextState, productId)
    if(!product) return
    product.quantity = quantity;
    nextState = calculateTotal(nextState)
    setProducts(nextState);
    return {nextState, quantity};
  }

  const addToCart = (newProduct, quantity) => {
    const product = findByProductId(products, newProduct.productId);
    console.log(product)
    if(product) return
    let nextState = [...products, { 
      ...newProduct,
      quantity
    }]
    nextState = calculateTotal(nextState)
    setProducts(nextState);
    return nextState;
  }

  const removeFromCart = (productId) => {
    const index = findIndexByProductId(products, productId);
    if(index === -1) return
    let nextState = JSON.parse(JSON.stringify(products));
    nextState.splice(index, 1);
    nextState = calculateTotal(nextState)
    setProducts(nextState);
    return nextState;
  }
  useEffect(() => {
    const total = products.reduce((sum, {total}) =>sum + total, 0 )
    setTotal(total)
  }, [products])

  return {products, updateQuantity, addToCart, removeFromCart, total}
}


const CartContext = React.createContext()

export function CartProvider ({ children }) {
  const value = useCart()
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/**
 * @returns {{products: CartProducts, updateQuantity: (productId: string, quantity: Number) => CartProducts, addToCart: (productToAdd: CartProduct, quantity: Number) => CartProducts, removeFromCart: (productIdToRemove: String) => CartProducts}}
 */
export function useCartContext () {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error(`useCartContext must be used within a CartProvider`)
  }
  return context
}