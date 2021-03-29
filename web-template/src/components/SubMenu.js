import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import "../styles/SubMenu.css";

function SubMenu() {
  const {
    isSubmenuOpen,
    closeSubMenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-1");

  useEffect(() => {
    setColumns("col-1");
    const submenu = container.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length > 3) {
      setColumns("col-2");
    }

    if (links.length > 6) {
      setColumns("col-3");
    }

    if (links.length > 13) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, url } = link;
          return (
            <Link
              key={index}
              to={url}
              className="link nav-link"
              onClick={closeSubMenu}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default SubMenu;
