import React from 'react'
import { ItemInfo } from '../../components/item-info';

const CartPageView = () => {
    return (
        <main className="cart-page">
            <h3>My Cart</h3>
            <section>
                <div className="item-details">
                    <ul className="label">
                        <li className="image">Image</li>
                        <li className="description">Description</li>
                        <li className="quantity">Quantity</li>
                        <li className="price">Price</li>
                        <li className="delete">Delete</li>
                    </ul>
                    <div className="container">
                        <ItemInfo />
                    </div>
                </div>
                <div className="price-details">
                    <ul className="container">
                        <li className ="total-amount">
                            <span>Grand Total</span> <span>&#8377;500</span>
                        </li>
                        <li className="checkout-btn">
                            <button className="btn-secondary">Checkout</button>
                        </li>

                    </ul>
                </div>
            </section>
        </main>
    )
}

export default CartPageView
