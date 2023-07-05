import { useState } from "react";
import "../Styles/collapse.sass";

function Collapse(props) {
  const { categoryName, categoryDetails } = props;
  const [activeButton, setActiveButton] = useState(false);

  return (
    <div className={`collapse ${activeButton ? "open" : "closed"}`}>
      <button
        className={`collapse__title ${activeButton ? "active" : ""}`}
        onClick={() => setActiveButton(!activeButton)}
      >
        <p>{categoryName}</p>
        <span className={`collapse__icon ${activeButton ? "open" : "closed"}`}></span>
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
