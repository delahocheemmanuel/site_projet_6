import React from "react";
import Card from "../../Components/Card"

const CardHost = () => {

    return (
        <div className="host-informations">
              <p>{Card.host.name}</p>
              <img src={Card.host.picture} alt="Host"/>
            </div>
    )
}

export default CardHost