import { useAuth } from 'js/firebase';
import orderService from 'js/order-service';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {ItemInfo} from '../../../components/item-info';
import {ReviewModal} from '../../../components/review-modal';
const OrderHistory = () => {
    const[user] = useAuth()
    const [products, setProducts] = useState([])

    useEffect(() => {
        if(!user?.uid) return;
        orderService.getPastOrder(user.uid).then((orders) => {
            setProducts(orders)
        })
    }, [user])
    return (
        <div className="order-history">
            <div className="item-details">
                <ul className="label">
                    <li className="image">Image</li>
                    <li className="description">Description</li>
                    <li className="quantity">Quantity</li>
                    <li className="price">Price</li>
                    <li className="delete">Delete</li>
                    <li className="delete">Review</li>
                </ul>
                <div className="container">
                {
                    products.map((product) => (
                        <ItemInfo type="placed-order" product={product}/>
                    ))
                }

                </div>
            </div>
            <ReviewModal/>

        </div>

    )
}

export default OrderHistory
