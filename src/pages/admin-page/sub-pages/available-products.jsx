import { findIndexByProductId } from 'context/cart-context';
import { ROLE, useRole } from 'js/iam';
import inventoryService from 'js/inventory-service';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
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

    const setProduct = (id, product) => {
        setProducts((products)=> {
            const nextState = JSON.parse(JSON.stringify(products))
            const index = findIndexByProductId(nextState, id, 'id')
            if (index === -1) return nextState
            nextState[index] = product
            return nextState
        })
    }

    const addProduct = (id, product) => {
        setProducts((products)=> {
            return [...products, {...product, id}]
        })
    }

    return [products, setProduct, addProduct]
}

const AvailableProducts = () => {
    const [products, setProduct, addProduct] = useProduct()
    const [editInfo, setEditInfo] = useState({})

    const [newProduct, setNewProduct] = useState()

    const onEditStatusChanged = (product) => {
        setEditInfo((info) => ({
            ...info,
            [product.id]: !info[product.id]
        }))
    }

    const onEdit = async (product) => {
        await inventoryService.updateProduct(product.id, product)
        setProduct(product.id, product)
    }

    const onAdd = async (product) => {
        const ref = await inventoryService.addProduct(product)
        addProduct(ref.id, product)
        setNewProduct({ imgUrl: '', name: '', items: '', cost: ''})
    }

    return (
        <div className="available-products">
            <div className="add-product item-details">
                <h3> Add New Product</h3>
                <div className="container">
                    <ItemInfo type="edit" onEdit={onAdd}  product={newProduct}/>
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
                        products.map((product) => 
                        <ItemInfo 
                            type={editInfo[product.id] ? 'edit' : 'available'} 
                            product={product} key={product.id} 
                            onEditStatusChanged={() => onEditStatusChanged(product)}
                            onEdit={onEdit}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default AvailableProducts;
