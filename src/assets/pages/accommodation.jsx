
import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/accommodation.scss";
import "../Styles/cardrating.scss";
import { data } from "../Data/Datas";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Collapse from "../Components/Collapse";
import CardPictures from "../Components/CardPictures";
import CardRating from "../Components/CardRating";

function Accommodation() {
  const { cardId } = useParams();
  const card = data.find((card) => card.id === cardId);



  return (
    <body>
<Header/>
    <main>
      
      <CardPictures
        imgSrc={card.pictures}
        imgAlt={`Photo de ${card.title} ${card.location}`}
      />
      <div className="card__about">
        <div className="card__informations">
          <div className="card__title">
            <h2>{card.title}</h2>
            <p>{card.location}</p>
          </div>
          <div className="card__tags">{card.tags}</div>
          <div className="card__rating-host" >
          <CardRating rating={card.rating} />
          <div className="card__host">
            <p>{card.host.name}</p>
            <img src={card.host.picture} alt="Host" />
          </div>
          
          </div>
          <div className="card__desc-equip" >
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
        </div>
      
    </main>
    <Footer/>
    </body>
  );
}

export default Accommodation;



