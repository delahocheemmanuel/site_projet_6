import React from "react";
import "../Styles/banner.sass";

function Banner(props) {
  // Extraction des propriétés de l'objet `props`
  const { imgSrc, imgAlt } = props;

  return (
    <div className="banner">
      <img src={imgSrc} alt={imgAlt} />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

