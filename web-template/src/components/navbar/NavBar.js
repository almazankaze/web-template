import React from "react";
import "../../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Context";

function NavBar() {
  const { openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempLink = e.target.getBoundingClientRect();

    const center = (tempLink.left + tempLink.right) / 2;
    const bottom = tempLink.bottom;

    openSubMenu(page, { center, bottom });
  };

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeSubMenu();
    }
  };

  return (
    <div className="navbar" onMouseOver={handleSubMenu}>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink
            to="/"
            activeClassName="current"
            className="link nav-link"
            exact={true}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/shop"
            activeClassName="current"
            className="link nav-link"
            onMouseOver={displaySubMenu}
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            activeClassName="current"
            className="link nav-link"
            onMouseOver={displaySubMenu}
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/media"
            activeClassName="current"
            className="link nav-link"
            onMouseOver={displaySubMenu}
          >
            Media
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/shortcode"
            activeClassName="current"
            className="link nav-link"
          >
            ShortCode
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/features"
            activeClassName="current"
            className="link nav-link"
          >
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            activeClassName="current"
            className="link nav-link"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
