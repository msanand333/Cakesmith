import React from 'react'
import AddressForm from './address-form';
import CardDetailsForm from './card-details-form';
import PaymentAck from './payment-ack';

const PaymentPageView = () => {
    return (
        <main className="payment-page">

            <div className="checkout-details">
                <h3>Checkout</h3>
                {/* <AddressForm/> */}
                {/* <CardDetailsForm/> */}
                <PaymentAck/>


            </div>

        </main>
    )
}

export default PaymentPageView
