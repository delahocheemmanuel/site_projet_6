import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { data } from "../Data/Datas";
import "../.assets/Styles/card.scss";


function Card() {
    const {cardId} = useParams();
    const card = data.find((card) => card.id === cardId);

    if (!card) {
        return <Navigate to="/NotFound" />;
    }else{
        return (
            <div className={["card"]}>
                <div className={["card-content"]}>
                    <img src={card.cover} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <Link to="/Accommodation">Retour</Link>
                </div>
            </div>
        );
    }

    
}


export default Card;