
import React from "react";
import { useParams, Navigate } from "react-router-dom";

import { data } from "../Data/Datas";
import CardTags from "../Components/CardTags";
import CardLocation from "../Components/CardLocation";
import CardDescription from "../Components/CardDescription";
import CardEquipements from "../Components/CardEquipements";
import CardRating from "../Components/CardRating";
import CardPictures from "../Components/CardPictures";
import CardHost from "../Components/CardHost";

function Accommodation() {
  const { cardId } = useParams();
  const card = data.find((card) => card.id === cardId);

  if (!card) {
    return <Navigate to="/error" />;
  }

  return (
    <main>
      <CardPictures
        imgSrc={card.pictures}
        imgAlt={`Photo de ${card.title} ${card.location}`}
      />
      <div className="card-about">
        <div className="card-informations">
          <div className="card-title">
            <h2>{card.title}</h2>
            <CardLocation location={card.location} />
          </div>
          <CardHost />
          <CardTags />
          <CardRating />
          <CardDescription />
          <CardEquipements />
        </div>
      </div>
    </main>
  );
}

export default Accommodation;

