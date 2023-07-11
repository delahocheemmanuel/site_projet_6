import React, { useState } from "react";
import left from "../images/icon/arrow__left.svg";
import right from "../images/icon/arrow__right.svg";
import "../Styles/cardpictures.sass";

function CardPictures(props) {
  const { imgSrc, imgAlt } = props;
  const [imageIndex, setImageIndex] = useState(0);

  function nextPicture() {
    // Vérifie si l'image actuelle est la dernière de la liste
    if (imageIndex === imgSrc.length - 1) {
      setImageIndex(0); // Si oui, revenir à la première image
    } else {
      setImageIndex(imageIndex + 1); // Sinon, passer à l'image suivante
    }
  }

  function previousPicture() {
    // Vérifie si l'image actuelle est la première de la liste
    if (imageIndex === 0) {
      setImageIndex(imgSrc.length - 1); // Si oui, passer à la dernière image
    } else {
      setImageIndex(imageIndex - 1); // Sinon, passer à l'image précédente
    }
  }

  if (imgSrc.length === 1) {
    // Si la liste d'images ne contient qu'une seule image
    return (
      <div className="slide__show">
        <img src={imgSrc[imageIndex]} alt={imgAlt} className="slide__show-image" />
      </div>
    );
  } else {
    // Si la liste d'images contient plusieurs images
    return (
      <div className="card__pictures">
        <div className="slide__show">
          <img src={imgSrc[imageIndex]} alt={imgAlt} className="slide__show--image" />
          <button className="button__arrow" onClick={previousPicture}>
            <img src={left} className="button__arrow--left" alt="arrow-left" />
          </button>
          <button className="button__arrow" onClick={nextPicture}>
            <img src={right} className="button__arrow--right" alt="arrow-right" />
          </button>
        </div>
        <div className="slide__show--count">
          <p>
            {imageIndex + 1}/{imgSrc.length}
          </p>
        </div>
      </div>
    );
  }
}

export default CardPictures;
