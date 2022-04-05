import React from 'react';
import './ShowReviews.css'

const ShowReviews = (props) => {
    const { name, photo, review, retting } = props.review;
    return (
        <div className='ShowReviews'>
            <div className="flex">
                <div>
                    <img src={photo} alt="" />
                </div>
                <div>
                    <b>{name}</b>
                </div>
            </div>
            <p id='retting'>Retting : <span id='retting-span'>{retting}</span></p>
            <p>{review}</p>
        </div>
    );
};

export default ShowReviews;