import React from "react";
import CardPictures from "../Components/CardPictures";
import redStar from "../images/icon/star-red.svg";
import greyStar from "../images/icon/star-grey.svg";
import Collapse from "../Components/Collapse";
import { useParams } from "react-router-dom";
import Error from "./Error";

const Accommodation = ({ dataCard }) => {
const { idCard } = useParams();
const currentId = dataCard.find((elem) => elem.id === idCard);
const ratingsTab = [1, 2, 3, 4, 5];

if (currentId) {
const {
title,
location,
tags,
host,
description,
equipments,
pictures,
rating,
} = currentId;
return (
<main className="accommodation">
<CardPictures pictures={pictures} />



    <div className="divDatas">
      <div className="firstDiv">
        <div>
          <h3 className="title">{title}</h3>
          <p className="locationText">{location}</p>
        </div>

        <div className="allTagsDiv">
          {tags.map((tag, index) => (
            <div className="tagDivs" key={index}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="secondDiv">
        <div className="hostDiv">
          <h2 className="hostName">{host.name}</h2>
          <img
            src={host.picture}
            alt={`hôte ${host.name}`}
            className="hostImg"
          />
        </div>

        <div className="starsDiv">
          {ratingsTab.map((elem, indexValue) =>
            elem <= parseInt(rating) ? (
              <img key={indexValue} src={redStar} alt="etoile rouge" />
            ) : (
              <img key={indexValue} src={greyStar} alt="etoile grisée" />
            )
          )}
        </div>
      </div>
    </div>

    <div className="collapseDivs">
      <Collapse title="Description" datas={description} />
      <Collapse title="Equipements" datas={equipments} />
    </div>
  </main>
);

} else {
return <Error />;

}


};

export default Accommodation;