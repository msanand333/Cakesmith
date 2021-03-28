import React from 'react'

const Img = ({ src }) => {
    return (
        <li className="image">
            <img src={src} alt="Black forest" />
        </li>
    )
}

export default Img
