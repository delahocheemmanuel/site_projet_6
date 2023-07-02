import React, { useState } from "react";
import left from "../images/icon/arrow__left.svg";
import right from "../images/icon/arrow__right.svg";
import "../Styles/cardpictures.sass";

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
      <div className="card__pictures" >
        <div className="slide__show">
          <img src={imgSrc[imageIndex]} alt={imgAlt} className="slide__show-image" />
          <button className="slide__show-button" onClick={previousPicture}>
            <img src={left} className="arrow__left" alt="arrow-left" />
          </button>
          <button className="slide__show-button" onClick={nextPicture}>
            <img src={right} className="arrow__right" alt="arrow-right" />
          </button>
        
        <div className="slide__show-count">
          <p>
            {imageIndex + 1}/{imgSrc.length}
          </p>
        </div>
        </div>
      </div>
    );
  }
}

export default CardPictures;
