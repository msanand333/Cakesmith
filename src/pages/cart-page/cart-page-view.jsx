import React from 'react'
import { ItemInfo } from '../../components/item-info';
import {Link} from 'react-router-dom'
import { useCartContext } from 'context/cart-context';

const CartPageView = () => {
    const { products, total } = useCartContext()
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
                    {
                        products.map((product) => (
                            <ItemInfo type="cart" productId={product.productId}/> 
                        ))
                    }

                        {/** OTHER WAYS TO USE THE ITEM INFO COMPONENT */}
                        {/* <ItemInfo type="edit"/>
                        <ItemInfo type="available"/>
                        <ItemInfo type="placed-order"/>
                        <ItemInfo type="received-order"/> */}
                    </div>
                </div>
                <div className="price-details">
                    <ul className="container">
                        <li className ="total-amount">
                            <span>Grand Total</span><span>&#8377;{total}</span>
                        </li>
                        <li className="checkout-btn">
                            <Link to='/payment'>
                            <button className="btn-secondary" disabled={!products.length}>Checkout</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default CartPageView
