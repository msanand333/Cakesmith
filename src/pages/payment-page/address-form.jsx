import React from 'react'
import { InputField } from '../../components/input-field';
const AddressForm = ({ address, zip, setAddress, setZip, onNext }) => {
    return (
        <div className='form form-address'>
            <ul className="stages">
                <li className="stage-one">
                    Shipping Address
                 </li>
            </ul>
            <ul>
                <InputField label="address" value={address} onChange={(event) => {setAddress(event.target.value)}}/>
                <InputField label="zip" value={zip} onChange={(event) => {setZip(event.target.value)}}/>
            </ul>
            <div className="action-btn-wrapper">
                <button className="btn-secondary" disabled>Back</button>
                <button className="btn-secondary" onClick={onNext}>Next</button>
            </div>
        </div>

    )
}

export default AddressForm
