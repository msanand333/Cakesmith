import React from 'react'
import blackForest from '../../assets/images/cakes/black-forest.jpeg';
const ProductCardView = () => {
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
                        <button className="btn-secondary">Add to cart</button>
                    </li>
                </ul>
            
        </li>

    )
}

export default ProductCardView;
