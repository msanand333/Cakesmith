import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'

const PlacedOrderItemInfo = () => {
    return (
        <ul className="info">
            <Img/>
            <Description/>
            <li className="quantity">5</li>
            <li className="price">
            &#8377;500
            </li>
            <li className="modify status">
                <p className="success">Accepted</p>
                <p className="failed">Preparing</p>
                <p className="success">Delivered</p>
            </li>

        </ul>
    )
}

export default PlacedOrderItemInfo
