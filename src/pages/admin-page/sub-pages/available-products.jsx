import { ROLE, useRole } from 'js/iam';
import inventoryService from 'js/inventory-service';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemInfo } from '../../../components/item-info';

const useProduct = () => {
    const role = useRole()
    const [products, setProducts] = useState([])
    useEffect(() => {
        if(role !== ROLE.OWNER) return
        inventoryService.getAllProducts().then((product) => {
            setProducts(product)
        })
    }, [role])
    return products
}

const AvailableProducts = () => {
    const products = useProduct()
    return (
        <div className="available-products">
            <div className="add-product item-details">
                <h3> Add New Product</h3>
                <div className="container">
                    <ItemInfo type="edit" />
                </div>
            </div>
            <div className="item-details">
            <h3> Existing Products</h3>
                <ul className="label">
                    <li className="image">Image</li>
                    <li className="description">Description</li>
                    <li className="quantity">Quantity</li>
                    <li className="price">Price</li>
                    <li className="delete">Delete</li>
                </ul>
                <div className="container">
                    {
                        products.map((product) => <ItemInfo type="available" product={product} key={product.id}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AvailableProducts;
