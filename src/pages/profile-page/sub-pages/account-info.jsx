import { ref } from 'js/const';
import { updatePassword, useAuth } from 'js/firebase';
import userServices from 'js/user-services';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {InputField} from '../../../components/input-field';

const AccountInfo = () => {
    
    const [authUser] = useAuth()

    const [info, setInfo] = useState({
        name: '',
        gender: '0',
        dob: '',
        address: '',
        city: '',
        contact: '',
        zip: '',
    })
    const [pass, setPass] = useState('')
    const [showUpdatePass, setShowUpdatePass] = useState(false)
    
    useEffect(() => {
        if(authUser?.uid){
            const isGoogle = authUser?.providerData[0].providerId.startsWith('google') ?? false 
            setShowUpdatePass(!isGoogle)
            userServices.getUserInfo(authUser.uid).then((info) => {
                if(!info) return
                console.log(info)
                setInfo(info)
            }).catch(console.log)
        }
    }, [authUser])

    const onChange = (key) => (event) => {
        setInfo((preState) => ({
            ...preState,
            [key]: event.target.value,
        }))
    }

    const onGenderChange = (event) => {
        setInfo((preState) => ({
            ...preState,
            gender: event.target.value,
        }))
    }

    const history = useHistory()

    const updateNewPassword = async () => {
        try{
            await updatePassword(pass)
            return true
        }catch(err){
            toast(err.message)
        }
        return false
    }

    return (
        <div className="account-info">
           <ul className="container">
            <InputField label='Name' value={info.name} onChange={onChange('name')}/>
            <li className="input-wrapper gender-input">
                <label htmlFor="" className="parent-label">Select Gender</label>
                <input id='male' name='gender'  type="radio" value='0' checked={info.gender === '0'} onChange={onGenderChange}/>
                <label htmlFor="male">Male</label>
                <input id='female' name='gender' type="radio" value='1' checked={info.gender === '1'} onChange={onGenderChange}/>
                <label htmlFor="female">Female</label>
                <input id='others' name='gender' type="radio" value='2' checked={info.gender === '2'} onChange={onGenderChange}/>
                <label htmlFor="others">Others</label>
            </li>
            <InputField label='Date Of Birth' type='date' value={info.dob} onChange={onChange('dob')}/>
            <InputField label='Address' value={info.address} onChange={onChange('address')}/>
            <InputField label='City' value={info.city} onChange={onChange('city')}/>
            <InputField label='postal' value={info.zip} onChange={onChange('zip')}/>
            <InputField label='Contact' type='tel' value={info.contact} onChange={onChange('contact')}/>
           { showUpdatePass && <InputField label='Password' type="password" value={pass} onChange={(event) => setPass(event.target.value)} optional/>}
        
           </ul>
           <div className='action-btn-wrapper'>
                <button className='btn-secondary' onClick={ async () => {
                    if((pass && await updateNewPassword(pass)) || !pass){
                        await userServices.addUser(authUser.uid, info)
                        toast('Details updated successfully')
                        history.push('/shop')
                    }
                }}>Save Changes</button>
           </div>
     
        </div>
    )
}

export default AccountInfo
