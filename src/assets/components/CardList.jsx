import React from "react";
import { data } from "../Data/Datas";
import { Link } from "react-router-dom";

import "../Styles/cardlist.sass";

function CardList() {
  

  return (
    <div className="card__list">
      {data.map((card) => {
        
        return (
          <div key={card.id} className="card__list-item">
            
            <Link to={`/Accommodation/${card.id}`}>
              <div className="card__list-content">
                <img src={card.cover} alt={card.title} />
                <p className="card__title">{card.title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CardList;




