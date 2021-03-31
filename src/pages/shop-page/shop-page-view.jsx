import React from 'react'
import { ProductCard } from '../../components/product-card'
import { useCollection } from 'react-firebase-hooks/firestore';
import { ref } from 'js/const';
import { useCartContext } from 'context/cart-context';
import { findByProductId } from '../../context/cart-context';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const ShopPageView = () => {
    const [snapshot, loading, error] = useCollection(ref().inventory);
    const {addToCart, removeFromCart, products} = useCartContext();

    const onAddToCart = ({product}) => {
        const {name, productId,  cost, imgUrl} = product
        const isAdded = Boolean(addToCart({name, productId, perCost: cost, imgUrl}, 1)); 
        return isAdded
    }

     const onRemoveFromCart = ({product}) => {
        const {productId} = product
        const isRemoved = Boolean(removeFromCart(productId)); 
        return isRemoved
    }

    const [productsToDisplay, setProductsToDisplay] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log(snapshot?.docs)
        setProductsToDisplay(snapshot?.docs)
    }, [snapshot])

    useEffect(() => {
        if(search){
            setProductsToDisplay((displayedProduct) => {
                const filterByName = (snap) => {
                    const product = snap.data()
                    return product.name?.toLocaleLowerCase()?.includes(search)
                }
                return displayedProduct.filter(filterByName)
            })
            return
        }
        setProductsToDisplay(snapshot?.docs)
    }, [search])

    const isProductAdded = (productId) => findByProductId(products, productId)
    return (
        <main className="shop-page">
            <ul className="input-wrapper search-input" >
            <input placeholder="Search product" type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
            </ul>
           
            <ul className="products">
            {
                productsToDisplay?.map((product) => (
                    <ProductCard product={{...product.data(), productId: product.id}} key={product.id} onAdd={onAddToCart} onRemove={onRemoveFromCart} isAdded={isProductAdded(product.id)}/>
                ))
            }
            {
                loading && <div className="spinner"></div>
            }
            </ul>
        </main>
    )
}

export default ShopPageView
