import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function MobileMenuItem({ title, links }) {
  const [subIsOpen, setSubIsOpen] = useState(false);

  const handleSubMenu = () => {
    setSubIsOpen(!subIsOpen);
  };

  const handleCloseMenu = () => {
    setSubIsOpen(false);
  };
  return (
    <>
      <div className="menuItem-title">
        <button className="btn-link" onClick={handleSubMenu}>
          <p>{title}</p>
          <ExpandMoreIcon className="icon-expand" />
        </button>
      </div>

      <ul className={`${subIsOpen ? "menu-links show" : "menu-links"}`}>
        {links.map((link, index) => {
          const { icon, label, url } = link;
          return (
            <li key={index} className="menu-link">
              <Link
                to={url}
                className="link menuLink-text"
                onClick={handleCloseMenu}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MobileMenuItem;
