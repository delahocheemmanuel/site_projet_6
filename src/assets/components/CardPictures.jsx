import React, { useState } from 'react';
import { data } from "../Data/Datas";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = data.images;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <div className="image-container">
      <img src={images[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
      </div>
      <div className="controls">
        <button onClick={handlePrev}>&larr;</button>
        <span>{`${currentImageIndex + 1}/${images.length}`}</span>
        <button onClick={handleNext}>&rarr;</button>
      </div>
    </div>
  );
};

export default Gallery;


