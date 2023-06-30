import React from "react";
import { data } from "../Data/Datas";
import { Link } from "react-router-dom";

import "../Styles/cardlist.scss";

function CardList() {
  console.log("CardList - data:", data); // Ajout du console.log pour afficher les données

  return (
    <div className={["card-list"]}>
      {data.map((card) => (
        <div key={card.id} className={["card-list-item"]}>
          <Link to={`/Accommodation/${card.id}`}>
            <div className={["card-list-content"]}>
              <img src={card.cover} alt={card.title} />
              <p className="card-title">{card.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CardList;



