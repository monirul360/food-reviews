import React from 'react';
import UseReviews from '../Hook/UseReviews';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = UseReviews();
    return (
        <div>
            <div className='review-container'>
                {
                    review.map(review => <ShowReviews
                        key={review.id}
                        review={review}
                    ></ShowReviews>)
                }
            </div>
        </div>
    );
};

export default Reviews;