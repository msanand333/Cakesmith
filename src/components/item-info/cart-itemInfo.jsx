import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'
import { Counter } from '../counter'
import { ReactComponent as TrashIcon } from '../../assets/images/svg/trash.svg'

const CartItemInfo = () => {
    return (
        <ul className="info">
            <Img />
            <Description />
            <li className="quantity">
                <Counter />
            </li>
            <li className="price">&#8377;500</li>
            <li className="modify">
                <i>
                    <TrashIcon />
                </i>
            </li>

        </ul>
    )
}

export default CartItemInfo
