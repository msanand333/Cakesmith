import React from 'react'

const DescriptionInput = ({value, onChange}) => {
    return (
        <li className = "description input-wrapper">
            <input placeholder='Product Name'  type="text" value={value} onChange={onChange}/>
            <a className="write-review">Write Description</a>
        </li>
    )
}

export default DescriptionInput
