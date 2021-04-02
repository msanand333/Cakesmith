import React from 'react'
import reviewService from 'js/review-service';

const ReviewModalView = ({ onSubmit }) => {
    const [review, setReview] = React.useState('')
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <h4>Write-review</h4>
                <textarea value={review} onChange={(event) => setReview(event.target.value)}></textarea>
                <button className='btn-secondary' onClick={() => {
                    onSubmit(review)
                }}>Submit</button>
            </div>
            
        </div>
    )
}

export default ReviewModalView
