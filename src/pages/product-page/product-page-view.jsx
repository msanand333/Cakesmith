import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore';
import { ref } from 'js/const';
import inventoryService from 'js/inventory-service';
import reviewService from 'js/review-service';

const ProductPageView = () => {
    const { itemId } = useParams()
    const [productInfo, productLoading] = useDocumentData(inventoryService.getProductRef(itemId))
    const [reviewInfo, reviewLoading] = useCollectionData(reviewService.getReviewRef(itemId), {
        idField: 'id'
    })
    if(productLoading || reviewLoading) {
        return <p>Fetching details</p>
    }
    return (
       <main className="product-page">
           <ul className="container">
               <li className="product-image">
                 <img src={productInfo.imgUrl} alt="Product-image"/>
               </li>
               <li className="product-description">
                    <h3>{productInfo.name}</h3>
                    <p>{productInfo.description}</p>
                    <button className="btn-secondary">Add to cart</button>
               </li>
               <li className="product-reviews">
                    <h3>Reviews</h3>
                    <ul className="review-wrapper">
                    {
                        reviewInfo?.map((review) => (
                            <li className="review" key={review.id}>
                                <h5>{review.userInfo.name}</h5>
                                <p>{review.review}</p>
                            </li>
                        )) ?? null
                    }
                    </ul>
               </li>

           </ul>

       </main>
    )
}

export default ProductPageView
