import React from 'react';
import heroBg from '../../assets/images/jpg/home-hero-bg.jpg';
import { ProductCard } from '../../components/product-card';
import { Link } from 'react-router-dom'

const HomePageView = () => {
    return (
        <main className="home-page">
            <img className="bg-img" src={heroBg} alt="Hero" />
            <section className="hero-section">
                <div className="content">
                    <h1>Just Cakes Welcomes You </h1>
                    <h4>Freshly Baked Goodness You Can't Resist</h4>
                    <Link to='/shop'>
                        <button className="btn-secondary">Shop Now</button>
                    </Link>

                </div>

            </section>
            {/* <section className="featured-items">
                <div className="container">
                    <h3>Featured Items</h3>
                    <ul className="content">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </ul>
                </div>


            </section> */}
            <section className="about">
                <div className="container">
                    <h3>About</h3>
                    <p>Just Cakes Bakery is a cakes cum pastry kitchen established in 2017 to bring the  taste of Vegan and Eggless Cakes to Kolkata. The bakery currently operates as a home kitchen from Howrah and plans on expanding to multiple locations across Kolkata. Today the pastry kitchen has turned into an exceedingly celebrated and famous brand with over 4 stars rating on Zomato.One of the key factors in Just Cakes Bakery’s prosperity has been its ethos that cakes taste best when they’ve been naturally heated utilizing the very same fixings and methods as those utilized in home preparing.</p>
                </div>
            </section>
        </main>
    )
}

export default HomePageView;
