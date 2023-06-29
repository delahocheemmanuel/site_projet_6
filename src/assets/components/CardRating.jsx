import React from "react";
import starRed from "../images/star-red.svg";
import starGrey from "../images/star-grey.svg";

function CardRating(props) {
    const {rating} = props;
    const maxRating = 5;
    const redStars = rating;
    const greyStars = maxRating - redStars;
    const stars = [];

    for (let i = 0; i < redStars; i++) {
        stars.push(starRed);
    }

    for (let i = 0; i < greyStars; i++) {
        stars.push(starGrey);
    }

    return (
        <div className="rating">
            <ul className="stars-list">
                <li className="star-item">
                {stars.map((star, index) => (
                <img key={index} src={star} alt="star"/>
            ))}
                </li>
            </ul>
        </div>
    )

}

export default CardRating;