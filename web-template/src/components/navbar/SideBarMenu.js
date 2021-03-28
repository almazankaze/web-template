import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Context";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SideBarMenu({ page, pageURL, links }) {
  const [subIsOpen, setSubIsOpen] = useState(false);
  const { closeSidebar } = useGlobalContext();

  const handleSubMenu = () => {
    setSubIsOpen(!subIsOpen);
  };

  const handleCloseMenu = () => {
    setSubIsOpen(false);
    closeSidebar();
  };

  return (
    <>
      <div className="main-link">
        <NavLink
          to={pageURL}
          className="link nav-link"
          onClick={handleCloseMenu}
        >
          {page}
        </NavLink>

        {links.length === 0 ? (
          ""
        ) : (
          <button className="btn-link" onClick={handleSubMenu}>
            <ExpandMoreIcon />
          </button>
        )}
      </div>
      {links.length === 0 ? (
        ""
      ) : (
        <ul className={`${subIsOpen ? "sub-links show" : "sub-links"}`}>
          {links.map((link, index) => {
            const { label, url } = link;
            return (
              <li key={index} className="sub-link">
                <NavLink
                  to={url}
                  className="link nav-link"
                  onClick={handleCloseMenu}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default SideBarMenu;
