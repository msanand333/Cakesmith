import React from 'react'

const ProductPageView = () => {
    return (
       <main className="product-page">
           <ul className="container">
               <li className="product-image">
                 <img src="" alt="Product-image"/>
               </li>
               <li className="product-description">
                    <h3>Product Name</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi illo nemo perferendis reiciendis eos fugit asperiores, blanditiis inventore, ratione consequuntur quas minima magnam debitis odio necessitatibus libero maxime dolore itaque?</p>
                    <button className="btn-secondary">Add to cart</button>
               </li>
               <li className="product-reviews">
                    <h3>Reviews</h3>
                    <ul className="review-wrapper">
                        <li className="review">
                            <h5>Reviewer Name</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima inventore est voluptate repellat unde tempora quisquam corrupti maiores quia, commodi voluptates soluta rem pariatur accusantium! A tenetur exercitationem illum sunt.</p>
                            
                        </li>
                        <li className="review">
                            <h5>Reviewer Name</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima inventore est voluptate repellat unde tempora quisquam corrupti maiores quia, commodi voluptates soluta rem pariatur accusantium! A tenetur exercitationem illum sunt.</p>
                            
                        </li>
                    </ul>
               </li>

           </ul>

       </main>
    )
}

export default ProductPageView
