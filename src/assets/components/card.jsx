import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { data } from "../Data/Datas";

function Card() {
  const { cardId } = useParams();
  const card = data.find((card) => card.id === cardId);

  if (!card) {
    return <Navigate to="error" replace />;
  } else {
    return (
      <div className="card">
        <div className="card-content">
          <img src={card.cover} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <Navigate to="/Accommodation" replace >Retour</Navigate>
        </div>
      </div>
    );
  }
}

export default Card;
