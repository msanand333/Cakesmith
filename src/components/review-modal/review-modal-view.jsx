import React from 'react'
import reviewService from 'js/review-service';

const ReviewModalView = ({ onSubmit, initialValue, onBack, title }) => {
    const [review, setReview] = React.useState(initialValue || '')
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <h4>{title}</h4>
                <textarea value={review} onChange={(event) => setReview(event.target.value)}></textarea>
                <div style={{width: "100%", display: 'flex', justifyContent: 'end', placeContent: 'flex-end'}}>
                    <button className='btn-primary' style={{margin: '2px'}} onClick={() => {
                            onBack()
                        }}>Back</button>
                    <button className='btn-secondary' style={{margin: '2px'}} onClick={() => {
                        onSubmit(review)
                    }}>Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default ReviewModalView
