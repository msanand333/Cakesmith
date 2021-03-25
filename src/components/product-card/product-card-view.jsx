import React from 'react'
import classNames from 'classnames'
import blackForest from '../../assets/images/cakes/black-forest.jpeg';
import { useState } from 'react';
const ProductCardView = () => {
    let isLoggedIn = true;
    const [isAdded,setIsAdded]=useState(false)
    const addToCart =()=>{
        if(isLoggedIn){
            setIsAdded(!isAdded)
        }
        else{
            alert('please login to continue')
        }
       
    }
    const cx = classNames(
        'btn-secondary',{
            'added':isAdded
        }
    )


    return (
        <li className="product-card">
           
                <figure>
                    <img src={blackForest} alt="Cake Name" />
                </figure>
                <ul className="product-details">
                    <li>
                        <span className="product-name">Black forest</span>
                        <br/>
                        <span className="product-price">&#8377;500</span>
                    </li>
                    <li className="quantity">
                        <button onClick={addToCart} className={cx}>
                            {isAdded ? 'Remove from cart':'Add to cart' }</button>
                    </li>
                </ul>
            
        </li>

    )
}

export default ProductCardView;
