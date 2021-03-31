import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'

const PlacedOrderItemInfo = ({ product }) => {
    return (
        <ul className="info">
            <Img src={product.imgUrl}/>
            <Description text={product.name}/>
            <li className="quantity">{product.quantity}</li>
            <li className="price">
            &#8377;{product.total}
            </li>
            <li className="modify status">
                <p className="success">{product.status}</p>
                <a className="write-review">Write Review</a>
            </li>
        </ul>
    )
}

export default PlacedOrderItemInfo
