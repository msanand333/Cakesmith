import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'
import { ORDER_STATUS } from 'js/order-service'
import { useState } from 'react'

const ReceivedOrderItemInfo = ({ product, onStatusChange }) => {
    const rejectedDefault = product.status === ORDER_STATUS.REJECTED
    const [isRejected, setIsRejected] = useState(rejectedDefault)
    const deliveredDefault = product.status === ORDER_STATUS.DELIVERED
    const [isDelivered, setIsDelivered] = useState(deliveredDefault)
    console.log(product.time)

    function convertFirebaseTimeStampToString(firebaseTimeStamp) {
        if (firebaseTimeStamp)
          return new Date(firebaseTimeStamp.seconds * 1000).toLocaleString('en-IN')
        return 'NA'
      }
    return (
        <ul className="info">
            <Img src={product.imgUrl}/>
            <Description text={product.name} address={product.address} time={ product.time ? convertFirebaseTimeStampToString(product.time): ''}/>
            <li className="quantity">{product.quantity}</li>
            <li className="price">
                &#8377;{product.total}
            </li>
            <li className="modify status">
                <div className="stage-1">
                    <input id="accept" name={`stage-1-${product.productId}`} type="radio" onClick={() => { onStatusChange(ORDER_STATUS.ACCEPTED); setIsRejected(false); }} defaultChecked={product.status === ORDER_STATUS.ACCEPTED} /> <label htmlFor="accept">Accept</label>
                    <br />
                    <input id="reject" name={`stage-1-${product.productId}`} type="radio" onClick={() => { onStatusChange(ORDER_STATUS.REJECTED); setIsRejected(true) }} defaultChecked={isRejected}/> <label htmlFor="reject">Reject</label>
                </div>
                <div className="stage-2">
                    <input id="preparing" name={`stage-2${product.productId}`} type="radio" onClick={() => {onStatusChange(ORDER_STATUS.PREPARING); setIsDelivered(false)}} disabled={isRejected} defaultChecked={product.status === ORDER_STATUS.PREPARING}/> <label htmlFor="preparing">Preparing</label>
                    <br />
                    <input id="delivered" name={`stage-2${product.productId}`} type="radio" onClick={() => {onStatusChange(ORDER_STATUS.DELIVERED); setIsDelivered(true); }} disabled={isRejected} defaultChecked={product.status === ORDER_STATUS.DELIVERED}/> <label htmlFor="delivered">Delivered</label>
                </div>
            </li>

        </ul>
    )
}

export default ReceivedOrderItemInfo
