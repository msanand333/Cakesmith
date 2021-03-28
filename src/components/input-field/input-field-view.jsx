import React from 'react'

const InputFieldView = (props) => {
    return (
        <li className="input-wrapper">
            <label htmlFor="">{props.label}</label>
            <input className="error" type="text" value={props.value} onChange={props.onChange}/>
            <span className="error-msg">Invalid Input</span>
        </li>
    )
}

export default InputFieldView
