import { useState } from "react";
import "../Styles/collapse.sass";

function Collapse(props) {
  const { categoryName, categoryDetails } = props;
  const [activeButton, setActiveButton] = useState(false);

  return (
    <div className={`collapse ${activeButton ? "open" : "closed"}`}>
      {/* Bouton du titre avec la catégorie */}
      <button
        className={`collapse__title ${activeButton ? "active" : ""}`}
        onClick={() => setActiveButton(!activeButton)} // Inverse la valeur de activeButton lorsqu'on clique sur le bouton
      >
        <p>{categoryName}</p> {/* Affiche le nom de la catégorie */}
        <span className={`collapse__icon ${activeButton ? "open" : "closed"}`}></span> {/* Icône qui change en fonction de l'état du bouton */}
      </button>
      {/* Affiche la description de la catégorie si activeButton est vrai */}
      {activeButton && (
        <div className="collapse__description">
          <div>{categoryDetails}</div> {/* Affiche les détails de la catégorie */}
        </div>
      )}
    </div>
  );
}

export default Collapse;
