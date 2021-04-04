import React from 'react'

const CardDetailsForm = ({onNext, onPre, card, setCard}) => {
    const [details, setDetails] = React.useState({
        expire: '',
        cvv: '',
    })
    const onChange = (key) => (event) => {
        setDetails((d) => ({
            ...d,
            [key]: event.target.value
        }))
    }
    return (
        <div className="form card-details">
            <ul className="stages">
                <li className="stage-two">
                    Payment details
                </li>
            </ul>

            <ul>
                <li className="input-wrapper card-number">
                    <label htmlFor="">Card number</label>
                    <input className="error" type="text" value={card} onChange={(event) => setCard(event.target.value)}/>
                    {!card && <span className="error-msg">Invalid card number</span>}
                </li>
            </ul>
            <ul>
                <li className="input-wrapper expiry">
                    <label htmlFor="">Expiry</label>
                    <input placeholder="MM/YY" className="error" type="text" onChange={onChange('expire')} value={details.expire}/>
                    {!details.expire && <span className="error-msg">Invalid input</span>}
                </li>
                <li className="input-wrapper cvv">
                    <label htmlFor="">Cvv</label>
                    <input placeholder="CVV" className="error" type="text" onChange={onChange('cvv')} value={details.cvv} />
                    {!details.cvv && <span className="error-msg">Invalid </span>}
                </li>
            </ul>
            <div className="action-btn-wrapper">
                <button className="btn-secondary" onClick={onPre}>Back</button>
                <button className="btn-secondary" onClick={onNext}>Submit</button>
            </div>
        </div>
    )
}

export default CardDetailsForm
