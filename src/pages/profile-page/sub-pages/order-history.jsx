import React from 'react'
import {ItemInfo} from '../../../components/item-info';

const OrderHistory = () => {
    return (
        <div className="order-history">
            <div className="item-details">
                <ul className="label">
                    <li className="image">Image</li>
                    <li className="description">Description</li>
                    <li className="quantity">Quantity</li>
                    <li className="price">Price</li>
                    <li className="delete">Delete</li>
                </ul>
                <div className="container">

                    <ItemInfo type="placed-order" />
                    <ItemInfo type="placed-order" />
                    <ItemInfo type="placed-order" />
                    <ItemInfo type="placed-order" />
                    <ItemInfo type="placed-order" />
                    <ItemInfo type="placed-order" />

                </div>
            </div>

        </div>

    )
}

export default OrderHistory
