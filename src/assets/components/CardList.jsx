import React from "react";
import { data } from "../Data/Datas";
import { Link } from "react-router-dom";
import styles from "../Styles/cardList.module.scss";

function CardList() {
  return (
    <div className={styles["card-list"]}>
      {data.map((card) => (
        <div key={card.id} className={styles["card-list-item"]}>
          <Link to={`/cards/${card.id}`}>
            <div className={styles["card-list-content"]}>
              <img src={card.cover} alt={card.title} />
              <h2>{card.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CardList;


