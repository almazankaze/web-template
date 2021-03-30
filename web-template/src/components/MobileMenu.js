import React from "react";
import "../styles/MobileMenu.css";
import MobileMenuItem from "./MobileMenuItem";

function MobileMenu(props) {
  return (
    <div className="menuItems">
      {props.list.map((item, index) => {
        const { title, links } = item;
        return (
          <div key={index} className="menuItem">
            <MobileMenuItem title={title} links={links} />
          </div>
        );
      })}
    </div>
  );
}

export default MobileMenu;
