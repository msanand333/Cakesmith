import React from 'react'
import { InputField } from '../../components/input-field';
const AddressForm = () => {
    return (
        <div className='form form-address'>
            <ul className="stages">
                <li className="stage-one">
                    Shipping Address
                       </li>
            </ul>

            <ul>
                <InputField label="first name" />
                <InputField label="last name" />

            </ul>
            <ul>
                <InputField label="address" />
                <InputField label="email" />

            </ul>
            <ul>
                <InputField label="city" />
                <InputField label="zip" />
            </ul>
            <div className="action-btn-wrapper">
                <button className="btn-secondary">Back</button>
                <button className="btn-secondary">Next</button>
            </div>
        </div>

    )
}

export default AddressForm
