import React from 'react'
import Img from './sub-components/img'
import Description from './sub-components/description'
import { ReviewModal } from 'components/review-modal';
import reviewService from 'js/review-service';
import { useAuth } from 'js/firebase';
import { toast } from 'react-toastify';

const PlacedOrderItemInfo = ({ product }) => {
    const [showReview, setShowReview] = React.useState(false);
    const [alreadyReviewed, setAlreadyReview] = React.useState(false);
    const [user] = useAuth()

    const userId = user.uid
    const productId = product.productId
    

    React.useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if(event.keyCode === 27) {
                setShowReview(false)
            }
        })
    }, [])

    React.useEffect(() => {
        reviewService.shouldAllowToAdd(userId, productId).then((isReviewed) => {
            setAlreadyReview(!isReviewed)
        })
    }, [userId, productId])

    const onSubmitReview = async (review) => {
        console.log(review)
        console.log(await reviewService.shouldAllowToAdd(userId, productId))
        if(await reviewService.shouldAllowToAdd(userId, productId)) {
            await reviewService.addReview(userId, productId, review)
            toast('Thanks for the review');
            setAlreadyReview(true);
            setShowReview(false);
        }
    }

    return (
        <ul className="info">
            <Img src={product.imgUrl}/>
            <Description text={product.name}/>
            <li className="quantity">{product.quantity}</li>
            <li className="price">
            &#8377;{product.total}
            </li>
            <li className="modify status">
                <p className="success">{product.status}</p>
                <a 
                    className="write-review" 
                    onClick={() =>{
                        if(alreadyReviewed){toast('You have already reviewed the product'); return;} 
                        setShowReview(true)
                    }}>Write Review</a>
            </li>
            {(showReview) && <ReviewModal onSubmit={onSubmitReview}/>}
        </ul>
    )
}

export default PlacedOrderItemInfo
