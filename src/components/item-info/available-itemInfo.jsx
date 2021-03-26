import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description';
import { ReactComponent as TrashIcon } from '../../assets/images/svg/trash.svg'
const AvailableItemInfo = () => {
    return (
        <ul className="info">
            <Img />
            <Description />
            <li className="quantity">5</li>
            <li className="price">&#8377;500</li>
            <li className="modify">
                <button className="btn-secondary update-btn">Update</button>
                <i>
                    <TrashIcon />
                </i>

            </li>
        </ul>
    )
}

export default AvailableItemInfo
