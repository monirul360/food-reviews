import { useState } from "react";

const UseReviews = () => {
    const [review, setReview] = useState([]);
    fetch("reviews.json")
        .then(Response => Response.json())
        .then(data => setReview(data));
    return [review, setReview];
}

export default UseReviews;