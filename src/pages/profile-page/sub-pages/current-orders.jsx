import { ref } from 'js/const';
import { useAuth } from 'js/firebase';
import orderService from 'js/order-service';
import React, {useState, useEffect} from 'react'
import {ItemInfo} from '../../../components/item-info';

const CurrentOrders = () => {
    const[user] = useAuth()
    const [products, setProducts] = useState([])

    useEffect(() => {
        if(!user?.uid) return;
        orderService.getCurrentOrder(user.uid).then((orders) => {
            setProducts(orders)
        })
    }, [user])

    return (
        <div className="current-orders">
              <div className="item-details">
                    <ul className="label">
                        <li className="image">Image</li>
                        <li className="description">Description</li>
                        <li className="quantity">Quantity</li>
                        <li className="price">Price</li>
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
            
        </div>
    )
}

export default CurrentOrders
