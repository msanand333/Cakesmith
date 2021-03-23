import React from 'react'
import blackForest from '../../assets/images/cakes/black-forest.jpeg';
import {Counter} from '../counter';
const ProductCardView = () => {
    return (
        <li className="product-card">
            <a href="javascript:void(0)">
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
                        <Counter/>
                    </li>
                </ul>
            </a>
        </li>

    )
}

export default ProductCardView;
