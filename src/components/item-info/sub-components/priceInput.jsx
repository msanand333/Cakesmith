import React from 'react'

const PriceInput = ({ value, onChange }) => {
    return (
        <li className="price input-wrapper">
            <input type="number" value={value} onChange={onChange}/>
        </li>
    )
}

export default PriceInput
