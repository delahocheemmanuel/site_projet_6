import React, { useState } from "react";
import "../Styles/cardpictures.scss";

function CardPictures(props) {
  const { imgSrc, imgAlt } = props;
  const [imageIndex, setImageIndex] = useState(0);


  function nextPicture() {
    if (imageIndex === imgSrc.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  
  function previousPicture() {
    if (imageIndex === 0) {
      setImageIndex(imgSrc.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  if (imgSrc.length === 1) {
    return (
      <div className="slide__show">
        <img src={imgSrc[imageIndex]} alt={imgAlt} className="slide__show-image" />
      </div>
    );
  } else {
    return (
      <div>
        <div className="slide__show">
          <img src={imgSrc[imageIndex]} alt={imgAlt} className="slide__show-image" />
          <button className="slide__show-button" onClick={previousPicture}>
            Précédent
          </button>
          <button className="slide__show-button" onClick={nextPicture}>
            Suivant
          </button>
        </div>
        <div className="slide__show-count">
          <p>
            {imageIndex + 1}/{imgSrc.length}
          </p>
        </div>
      </div>
    );
  }
}

export default CardPictures;
