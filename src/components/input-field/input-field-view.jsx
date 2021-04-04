import React from 'react'

const InputFieldView = (props) => {
    return (
        <li className="input-wrapper">
            <label htmlFor="">{props.label}</label>
            <input className="error" placeholder={props.placeholder ? props.placeholder:''} type={ props.type ? props.type:'text' } value={props.value} onChange={props.onChange}/>
            {!props.optional && !props.value && <span className="error-msg">Invalid Input</span>}
        </li>
    )
}

export default InputFieldView
