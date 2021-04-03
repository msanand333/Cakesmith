import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore';
import { ref } from 'js/const';
import inventoryService from 'js/inventory-service';
import reviewService from 'js/review-service';
import { findByProductId, useCartContext } from 'context/cart-context';
import classNames from 'classnames';

const ProductPageView = () => {
    const { itemId } = useParams()
    const [productInfo, productLoading] = useDocumentData(inventoryService.getProductRef(itemId), {
        idField: 'id'
    })
    const [reviewInfo, reviewLoading] = useCollectionData(reviewService.getReviewRef(itemId), {
        idField: 'id'
    })

    const {addToCart, products, removeFromCart} = useCartContext()
    const product = findByProductId(products, itemId);

    const syncWithCart = () => {
        if(product) return removeFromCart(itemId)
        const {name, id: productId,  cost, imgUrl, cost: perCost} = productInfo
        addToCart({name, productId,  cost, imgUrl, perCost}, 1);
    }

    if(productLoading || reviewLoading) {
        return <p>Fetching details</p>
    }

    const cx = classNames(
        'btn-secondary',{
            'added': product
        }
    )
    
    return (
       <main className="product-page">
           <ul className="container">
               <li className="product-image">
                 <img src={productInfo.imgUrl} alt="Product-image"/>
               </li>
               
               <li className="product-description">
                    <h3>{productInfo.name}</h3>
                    <h4><span>Price - </span>&#8377;{productInfo.cost}</h4>
                    <button className={cx} onClick={syncWithCart}>{product ?'Remove from cart' : 'Add to cart'}</button>
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
