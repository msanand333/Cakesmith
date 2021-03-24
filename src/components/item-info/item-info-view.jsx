import React from 'react'
import BlackForest from '../../assets/images/cakes/black-forest.jpeg';
import { Counter } from '../../components/counter';
import { ReactComponent as TrashIcon } from '../../assets/images/svg/trash.svg'

const ItemInfoView = () => {
    return (
        <ul className="info">
            <li className="image">
                <img src={BlackForest} alt="Black forest" />
            </li>
            <li className="description">
                <p> Black forest cake</p>
            </li>
            <li className="quantity"><Counter /></li>
            <li className="price">&#8377;500</li>
            <li className="delete">
                <i>
                    <TrashIcon />
                </i>
            </li>
        </ul>
    )
}

export default ItemInfoView
