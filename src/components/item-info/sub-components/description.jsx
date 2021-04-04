import React from 'react'

const Description = ({ text,address,time }) => {
    return (
        <li className="description">
                <p className="product-name">{text}</p>
                {address? <p className="address"> <span>Address - </span>{address}</p>:''}
                {time?   <p className="time-stamp"> <span>Time - </span>{time}</p>:''}
              
        </li>
    )
}

export default Description
