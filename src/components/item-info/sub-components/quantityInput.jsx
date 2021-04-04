import React from 'react'

const QuantityInput = ({ value, onChange }) => {
    return (
        <li className="quantity input-wrapper">
            <input placeholder='Quantity'  type="number" value={value} onChange={onChange}/>
        </li>
    )
}

export default QuantityInput
