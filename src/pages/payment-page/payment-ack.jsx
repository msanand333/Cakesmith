import React from 'react'
import { ReactComponent as SuccessIcon } from '../../assets/images/svg/payment-successful.svg';
import { ReactComponent as FailureIcon } from '../../assets/images/svg/payment-failed.svg';
import { useState } from 'react';

const PaymentAck = () => {

    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(true)

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
