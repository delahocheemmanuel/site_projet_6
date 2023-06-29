import React from "react";
import Card from "../../Components/Card"

const CardTags = () => {

    return (
        <ul className="tags-list">
                  {Card.tags.map((tag) => (
                        <li className="tag-item" key={`${tag}-${Card.id}`}>{tag}</li>
                        ))}
        </ul>
    )
}

export default CardTags