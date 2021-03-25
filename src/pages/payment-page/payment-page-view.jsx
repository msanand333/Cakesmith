import React from 'react'
import { InputField } from '../../components/input-field'

const PaymentPageView = () => {
    return (
        <main className="payment-page">

            <div className="checkout-details">
                <h3>Checkout</h3>

                <div className='form form-address'>
                    <ul className="stages">
                        <li className="stage-one">
                            Shipping Address
                       </li>
                    </ul>

                    <ul>
                        <InputField label="first name" />
                        <InputField label="last name" />

                    </ul>
                    <ul>
                        <InputField label="address" />
                        <InputField label="email" />

                    </ul>
                    <ul>
                        <InputField label="city" />
                        <InputField label="zip" />
                    </ul>
                    <div className="action-btn-wrapper">
                        <button className="btn-secondary">Back</button>
                        <button className="btn-secondary">Next</button>
                    </div>
                </div>
                <div className="form card-details">

                    <ul className="stages">
                        <li className="stage-two">
                            Payment details
                       </li>
                    </ul>

                    <ul>
                        <li className="input-wrapper card-number">
                            <label htmlFor="">Card number</label>
                            <input className="error" type="text" />
                            <span className="error-msg">Invalid card number</span>
                        </li>
                    </ul>
                    <ul>
                        <li className="input-wrapper expiry">
                            <label htmlFor="">Expiry</label>
                            <input placeholder="MM/YY" className="error" type="text" />
                            <span className="error-msg">Invalid input</span>
                        </li>
                        <li className="input-wrapper cvv">
                            <label htmlFor="">Cvv</label>
                            <input placeholder="CVV" className="error" type="text" />
                            <span className="error-msg">Invalid </span>
                        </li>
                    </ul>
                    <div className="action-btn-wrapper">
                        <button className="btn-secondary">Back</button>
                        <button className="btn-secondary">Submit</button>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default PaymentPageView
