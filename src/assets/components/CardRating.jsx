import React from "react";
import starRed from "../images/icon/star-red.svg";
import starGrey from "../images/icon/star-grey.svg";

function CardRating(props) {
  const { rating } = props;
  const maxRating = 5;
  const redStars = rating;
  const greyStars = maxRating - redStars;
  const stars = [];

  // Ajoute les étoiles rouges à la liste des étoiles
  for (let i = 0; i < redStars; i++) {
    stars.push(starRed);
  }

  // Ajoute les étoiles grises à la liste des étoiles
  for (let i = 0; i < greyStars; i++) {
    stars.push(starGrey);
  }

  return (
    <div className="stars">
      <ul className="stars__list">
        <li className="star__item">
          {/* Affiche chaque étoile en utilisant la liste d'images d'étoiles */}
          {stars.map((star, index) => (
            <img key={index} src={star} alt="star" />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default CardRating;
