import { ROLE, useRole } from 'js/iam';
import orderService from 'js/order-service';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {ItemInfo} from '../../../components/item-info';


const useProduct = () => {
    const role = useRole()
    const [products, setProducts] = useState([])
    useEffect(() => {
        if(role !== ROLE.OWNER) return
        orderService.getPlacedOrders().then((orders) => {
            setProducts(orders)
        })
    }, [role])
    return products
}


const ReceivedOrders = () => {
    const products = useProduct()
    return (
        <div className="placed-orders">
            <div className="item-details">
                <ul className="label">
                    <li className="image">Image</li>
                    <li className="description">Description</li>
                    <li className="quantity">Quantity</li>
                    <li className="price">Price</li>
                    <li className="delete">Delete</li>
                </ul>
                <div className="container">
                {
                    products.map((product) => (
                        <ItemInfo type="received-order" product={product} key={product.productId} onStatusChange={(status) => orderService.updateOrderStatus(product.orderId, status) }/>
                    ))
                }
                </div>
            </div>

        </div>
    )
}

export default ReceivedOrders
