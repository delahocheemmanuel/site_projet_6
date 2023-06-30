import { useState, useEffect } from "react";
import arrowDown from "../images/icon/arrow__down.svg";
import arrowUp from "../images/icon/arrow__up.svg";
import "../Styles/collapse.scss";

function Collapse(props) {
  const {categoryName, categoryDetails} = props;
  const [activeButton, setActiveButton] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");

  useEffect(() => {
    if (activeButton) {
      setArrowDirection("up");
    } else {
      setArrowDirection("down");
    }
  }, [activeButton])

    return (
      <div className="caroussel">
        <button className={`caroussel__title ${activeButton ? "active" : ""}`} onClick={() => setActiveButton(!activeButton)}>
        <p>{categoryName}</p>
        <img src={arrowDirection === "down" ? arrowDown : arrowUp} alt={`white-arrow-${arrowDirection}`}></img>
        </button>
        {activeButton && (
        <div className="caroussel__description">
          <div>{categoryDetails}</div>
        </div>
        )}
      </div>
    )
  }
  
  export default Collapse;