import React from "react";
import "../../styles/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
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
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            activeClassName="current"
            className="link nav-link"
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/media"
            activeClassName="current"
            className="link nav-link"
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
