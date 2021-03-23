import React from 'react';
import heroBg from '../../assets/images/jpg/home-hero-bg.jpg';
import { ProductCard } from '../../components/product-card';

const HomePageView = () => {
    return (
        <main className="home-page">
            <img className="bg-img" src={heroBg} alt="Hero" />
            <section className="hero-section">
                <div className="content">
                    <h1>Cakesmith Welcomes You </h1>
                    <h4>Freshly Baked Goodness You Can't Resist</h4>
                    <button className="btn-secondary">Shop Now</button>
                </div>

            </section>
            <section className="featured-items">
                <div className="container">
                    <h3>Featured Items</h3>
                    <ul className="content">
                    <ProductCard/>
                     <ProductCard/>
                     <ProductCard/>
                    </ul>
                </div>


            </section>
            <section className="about">
                <div className="container">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci autem saepe qui, praesentium,
                    labore similique natus nostrum temporibus deserunt
                    repellat blanditiis minus quia laboriosam? Possimus
                    corporis corrupti maiores earum libero?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique quaerat magni odio sapiente placeat commodi
                    voluptates quibusdam animi minima, dicta alias quidem
                    repellat cum ut distinctio aspernatur excepturi 
                    itaque quasi.</p>
                </div>
            </section>
        </main>
    )
}

export default HomePageView;
