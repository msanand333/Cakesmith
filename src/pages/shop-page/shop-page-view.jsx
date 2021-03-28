import React from 'react'
import { ProductCard } from '../../components/product-card'
import { useCollection } from 'react-firebase-hooks/firestore';
import { ref } from 'js/const';
import { useCartContext } from 'context/cart-context';
import { findByProductId } from '../../context/cart-context';

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

    const isProductAdded = (productId) => findByProductId(products, productId)
    return (
        <main className="shop-page">
            <ul className="products">
            {
                snapshot?.docs?.map((product) => (
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
