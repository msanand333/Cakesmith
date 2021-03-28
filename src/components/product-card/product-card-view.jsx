import React from 'react'
import classNames from 'classnames'
import { useState } from 'react';
import { useAuth } from 'js/firebase';
import { toast } from 'react-toastify';

const ProductCardView = ({ product, onAdd, onRemove, isAdded: _isAdded }) => {
    const { name, cost, imgUrl } = product || {}
    const [user] = useAuth()
    const isLoggedIn = Boolean(user)
    const [isAdded,setIsAdded]=useState(_isAdded)
    
    const addToCart = () => {
        const isAdded = onAdd({product})
        if(!isAdded) return toast('Something went wrong refresh the page')
        setIsAdded(true)
    }

    const removeFromCart = () => {
        const isRemoved = onRemove({product})
        if(!isRemoved) return toast('Something went wrong refresh the page')
        setIsAdded(false)
    }

    const syncWithCart = () => {
        if(!isLoggedIn) return toast('please login to continue')
        if (isAdded) return removeFromCart()
        addToCart()
    }
    const cx = classNames(
        'btn-secondary',{
            'added':isAdded
        }
    )

    return (
        <li className="product-card">
                <figure>
                    <img src={imgUrl} alt="Cake Name" />
                </figure>
                <ul className="product-details">
                    <li>
                        <span className="product-name">{name}</span>
                        <br/>
                        <span className="product-price">&#8377;{cost}</span>
                    </li>
                    <li className="quantity">
                        <button onClick={syncWithCart} className={cx}>
                            {isAdded ? 'Remove from cart':'Add to cart' }</button>
                    </li>
                </ul>
            
        </li>

    )
}

export default ProductCardView;
