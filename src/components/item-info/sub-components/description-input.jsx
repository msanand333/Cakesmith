import React from 'react'

const DescriptionInput = ({value, onChange}) => {
    return (
        <li className = "description input-wrapper">
            <input placeholder='Product Name'  type="text" value={value} onChange={onChange}/>
        </li>
    )
}

export default DescriptionInput
