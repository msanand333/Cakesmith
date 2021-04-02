import React from 'react';
import {InputField} from '../../../components/input-field';

const AccountInfo = () => {
    return (
        <div className="account-info">
           <ul className="container">
            <InputField label='Name'/>
            <li className="input-wrapper gender-input">
                <label htmlFor="" className="parent-label">Select Gender</label>
                <input id='male' name='gender'  type="radio"/>
                <label htmlFor="male">Male</label>
                <input id='female' name='gender' type="radio"/>
                <label htmlFor="female">Female</label>
                <input id='others' name='gender' type="radio"/>
                <label htmlFor="others">Others</label>
            </li>
            <InputField label='Date Of Birth' type='date'/>
            <InputField label='Address'/>
            <InputField label='City'/>
            <InputField label='Contact' type='tel'/>
            <InputField label='Password' type="password"/>
        
           </ul>
           <div className='action-btn-wrapper'>
                <button className='btn-secondary'>Save Changes</button>
           </div>
     
        </div>
    )
}

export default AccountInfo
