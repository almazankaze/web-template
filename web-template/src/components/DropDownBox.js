import React, { useState } from "react";
import "../styles/DropDownBox.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function DropDownBox({ list }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleDropBox = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className="dropDown">
      <button className="link btn-link" onClick={handleDropBox}>
        Contact <ExpandMoreIcon className="link-icon" />
      </button>

      <div
        className={`${
          isDropDownOpen ? "dropDown-items show" : "dropDown-items"
        }`}
      >
        {list.map((item, index) => {
          return <h4 key={index}>{item}</h4>;
        })}
      </div>
    </div>
  );
}

export default DropDownBox;
