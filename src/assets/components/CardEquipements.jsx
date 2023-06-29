import React from "react";
import Card from "../../Components/Card"

const CardEquipements = () => {

    return (
        <ul>
            {Card.equipements.map((equipement) => (
                <li key={`${equipement}-${Card.id}`}>{equipement}</li>
            ))}
            
        </ul>
    )
}

export default CardEquipements