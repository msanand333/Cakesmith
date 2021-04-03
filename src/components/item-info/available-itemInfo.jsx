import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description';
import { ReactComponent as TrashIcon } from '../../assets/images/svg/trash.svg'
const AvailableItemInfo = ({ product, onEditStatusChanged, onDelete }) => {
    return (
        <ul className="info">
            <Img src={product.imgUrl}/>
            <Description text={product.name}/>
            <li className="quantity">{product.items}</li>
            <li className="price">&#8377;{product.cost}</li>
            <li className="modify">
                <button className="btn-secondary update-btn" onClick={onEditStatusChanged}>Update</button>
                <i onClick={() => {
                    onDelete(product.id)
                }}>
                    <TrashIcon />
                </i>

            </li>
        </ul>
    )
}

export default AvailableItemInfo
