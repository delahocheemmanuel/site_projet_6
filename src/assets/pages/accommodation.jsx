
import React from "react";
import { useParams,} from "react-router-dom";

import { data } from "../Data/Datas";

import CardPictures from "../Components/CardPictures";



function Accommodation() {
  const { cardId } = useParams();
  const card = data.find((card) => card.id === cardId);
  
  console.log(card);

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
            
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default Accommodation;

