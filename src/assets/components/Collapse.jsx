import { useState } from "react";
import arrowDown from "../images/icon/arrow__down.svg";
import arrowUp from "../images/icon/arrow__up.svg";
import "../Styles/collapse.scss";

function Collapse(props) {
  const { categoryName, categoryDetails } = props;
  const [activeButton, setActiveButton] = useState(true); // Définir activeButton à true par défaut

  const toggleCollapse = () => {
    setActiveButton(!activeButton);
  };

  return (
    <div className="collapse">
      <button className={`collapse__title ${activeButton ? "active" : ""}`} onClick={toggleCollapse}>
        <p>{categoryName}</p>
        <img src={activeButton ? arrowUp : arrowDown} alt={`white-arrow-${activeButton ? "up" : "down"}`} />
      </button>
      {activeButton && (
        <div className="collapse__description">
          <div>{categoryDetails}</div>
        </div>
      )}
    </div>
  );
}

export default Collapse;

