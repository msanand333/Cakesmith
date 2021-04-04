import { useCartContext } from 'context/cart-context';
import { useCheckout } from 'hooks/checkout';
import { useAuth } from 'js/firebase';
import userServices from 'js/user-services';
import React from 'react'
import { useEffect } from 'react';
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
    const [user] = useAuth()

    useEffect(() => {
        if(!user) return
        userServices.getUserInfo(user.uid).then((info) => {
            setAddress(info.address)
            setZip(info.zip)
        })
    }, [user])
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
                        if(checkInventory(products) && address && zip){
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
