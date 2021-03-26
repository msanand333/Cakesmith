import React from 'react';
import UploadImg from './sub-components/upload-img';
import DescriptionInput from './sub-components/description-input';
import QuantityInput from './sub-components/quantityInput';
import PriceInput from './sub-components/priceInput';
const EditItemInfo = () => {
    return (
        <ul className="info edit-product">
            <UploadImg/>
            <DescriptionInput/>
            <QuantityInput/>
            <PriceInput/>
            <li className="modify">
                <button className="btn-secondary">Done</button>
            </li>
        
        </ul>
    )
}

export default EditItemInfo
