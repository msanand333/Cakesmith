import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CounterView = ({ onInc, onDec, count }) => {
    return (
        <div className="counter">
            <button onClick={() => onDec(count)}>&#8722;</button>
            <span>{count}</span>
            <button onClick={() => onInc(count)}>&#43;</button>
        </div>
    )
}

export default CounterView
