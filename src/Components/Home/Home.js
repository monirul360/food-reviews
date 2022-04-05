import React from 'react';
import slider from './slider.webp';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className="slider-section">
                <div className="text-content">
                    <h1>Good food is very important for the all people </h1>
                    <p>The food we eat breaks down and gives us energy. Every food contains a lot of vitamins . Some foods are low in vitamins and some foods are high in vitamins
                        .So people should eat more vitamin foods.This will make our body much better</p>
                    <button>Ream More</button>
                </div>
                <div className="img-content">
                    <img src={slider} alt="" />
                </div>
            </div>
            <div className="reviews-content">
                <h1 style={{ textAlign: 'center' }}>Customer Reviews</h1>

                <Link to="/reviews">See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;