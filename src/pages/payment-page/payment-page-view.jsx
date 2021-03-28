import { useCartContext } from 'context/cart-context';
import { useCheckout } from 'hooks/checkout';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import AddressForm from './address-form';
import CardDetailsForm from './card-details-form';
import PaymentAck from './payment-ack';

const PaymentPageView = () => {
    const {address, canProceedToPay, card, checkInventory, isCardValid, onPaymentSuccess, setAddress, setCard, setZip, zip} = useCheckout();
    const {products, total} = useCartContext()
    const cart = {
        products,total
    }
    const [page, setPage] = useState(1)
    return (
        <main className="payment-page">

            <div className="checkout-details">
                <h3>Checkout</h3>
                {page === 1 && 
                <AddressForm 
                    address={address} 
                    zip={zip} 
                    setAddress={setAddress} 
                    setZip={setZip} 
                    onNext={() => {
                        if(checkInventory(products)){
                            setPage(2)
                        }
                    }} />}
                {page === 2 && 
                <CardDetailsForm
                    onNext={async () => {
                        if(!isCardValid(card)) return toast('Card Invalid')
                        await onPaymentSuccess(cart)
                        setPage(3)
                    }} 
                    onPre={() => setPage(1)}
                    card={card} setCard={setCard}/>}
                {page === 3 && <PaymentAck/>}


            </div>

        </main>
    )
}

export default PaymentPageView
