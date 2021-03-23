import React, { useState } from 'react'

const CounterView = () => {
    const [count, setCount] = useState(0);

    const incCount = () => {
        if(count<10){
            setCount(count + 1);
        }
        else{
            setCount(10)
        }
      
    }
    const decCount = () => {
        if(count>0){
            setCount(count - 1);
        }
        else{
            setCount(0)
        }
      
    }
    return (
        <div className="counter">
            <button onClick={decCount}>&#8722;</button>
            <span>{count}</span>
            <button onClick={incCount}>&#43;</button>
        </div>
    )
}

export default CounterView
