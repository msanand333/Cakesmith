import React from 'react';
import UploadImg from './sub-components/upload-img';
import DescriptionInput from './sub-components/description-input';
import QuantityInput from './sub-components/quantityInput';
import PriceInput from './sub-components/priceInput';
import { useState, useEffect } from 'react';

const EditItemInfo = ({ product, onEditStatusChanged, onEdit }) => {
    const [values, setValues] = useState(product)
    useEffect(() => {
        setValues(product)
    }, [product])
    console.log(values)
    const { imgUrl, name, items, cost } = values || {}
    const onChange = (key) => (event) => {
        setValues((value) => ({
            ...value,
            [key]: event.target.value
        }))
    }
    return (
        <ul className="info edit-product">
            <li className="image input-wrapper">
             <input type="text" className="image-url" value={imgUrl} onChange={onChange('imgUrl')}/>
            </li>
            <DescriptionInput value={name} onChange={onChange('name')}/>
            <QuantityInput value={items} onChange={onChange('items')}/>
            <PriceInput value={cost} onChange={onChange('cost')}/>
            <li className="modify">
                <button className="btn-secondary" onClick={async () => {
                    const updatedVal = await onEdit(values)
                    console.log(updatedVal)
                    onEditStatusChanged?.()
                }}>Done</button>
            </li>
        
        </ul>
    )
}

export default EditItemInfo
