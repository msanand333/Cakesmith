/* eslint-disable no-restricted-globals */
import React from 'react'
import { ReactComponent as SuccessIcon } from '../../assets/images/svg/payment-successful.svg';
import { ReactComponent as FailureIcon } from '../../assets/images/svg/payment-failed.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCartContext } from 'context/cart-context';

const PaymentAck = () => {

    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(true)

    const { resetCart } = useCartContext()
    const history = useHistory()

    useEffect(() => {
        resetCart()
    }, [])
    
    useEffect(() => {
        const timeId = setTimeout(() => {
            history.push('/profile')
            location.reload()
        }, 10000)
        return () => clearTimeout(timeId)
    }, [])

    return (
        <div className="payment-ack">
            <div className="content">
                {isPaymentSuccessful ? <SuccessIcon /> : <FailureIcon />}
                <h4>
                    {isPaymentSuccessful ? 'Payment Successful' : 'Payment Failed'}
                </h4>
            </div>
        </div>
    )
}

export default PaymentAck
