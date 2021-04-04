import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'
import { Counter } from '../counter'
import { ReactComponent as TrashIcon } from '../../assets/images/svg/trash.svg'
import { useCartContext } from 'context/cart-context'
import { findByProductId } from '../../context/cart-context'
import { toast } from 'react-toastify'

const CartItemInfo = ({ productId }) => {
    const {products, removeFromCart, updateQuantity} = useCartContext()
    const product = findByProductId(products, productId)
    const {imgUrl, name, quantity, total} = product || {}

    const onInc = (count) => {
        updateQuantity(productId, count+1)
    }

    const onDec = (count) => {
        if(count < 2) return toast('Minimum of 1 product should be selected') 
        updateQuantity(productId, count-1)
    }
    return (
        <ul className="info">
            <Img src={imgUrl}/>
            <Description text={name}/>
            <li className="quantity">
                <Counter onInc={onInc} onDec={onDec} count={quantity}/>
            </li>
            <li className="price">&#8377;{total}</li>
            <li className="modify">
                <i>
                    <TrashIcon onClick={() => removeFromCart(productId)}/>
                </i>
            </li>

        </ul>
    )
}

export default CartItemInfo
