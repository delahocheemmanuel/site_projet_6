
import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/accommodation.scss";
import { data } from "../Data/Datas";

import Collapse from "../Components/Collapse";
import CardLocation from "../Components/CardLocation";
import CardPictures from "../Components/CardPictures";
import CardRating from "../Components/CardRating";

function Accommodation() {
  const { cardId } = useParams();
  const card = data.find((card) => card.id === cardId);



  return (
    <main>
      <CardPictures
        imgSrc={card.pictures}
        imgAlt={`Photo de ${card.title} ${card.location}`}
      />
      <div className="card__about">
        <div className="card__informations">
          <div className="card__title">
            <h2>{card.title}</h2>
            <CardLocation location={card.location} />
          </div>
          <div className="card__host">
            <p>{card.host.name}</p>
            <img src={card.host.picture} alt="Host" />
          </div>
          <div className="card__tags">{card.tags}</div>
          <CardRating rating={card.rating} />
          
          <div className="card__description">
            <Collapse
              categoryName="Description"
              categoryDetails={card.description}
            />
          </div>
          <div className="card__equipements">
            <Collapse
              categoryName="Equipements"
              categoryDetails={card.equipments}

            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Accommodation;



