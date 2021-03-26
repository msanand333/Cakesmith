import React from 'react'
import { ItemInfo } from '../../../components/item-info';

const AvailableProducts = () => {
    return (
        <div className="available-products">
            <div className="add-product item-details">
                <h3> Add New Product</h3>
                <div className="container">
                    <ItemInfo type="edit" />
                </div>

            </div>

            <div className="item-details">
                <ul className="label">
                    <li className="image">Image</li>
                    <li className="description">Description</li>
                    <li className="quantity">Quantity</li>
                    <li className="price">Price</li>
                    <li className="delete">Delete</li>
                </ul>
                <div className="container">
                    <ItemInfo type="edit" />
                    <ItemInfo type="available" />

                </div>
            </div>
        </div>
    )
}

export default AvailableProducts;
