import React from "react";
import "../../styles/TopNav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import SideBar from "./SideBar";

function TopNav() {
  return (
    <nav className="topNav">
      <div className="top-row">
        <div className="left-content">
          <button className="link btn-link">
            Contact <ExpandMoreIcon className="link-icon" />
          </button>

          <div className="vl"></div>

          <Link to="/" className="link">
            Wishlist (0)
          </Link>
        </div>
        <div className="middle-content">
          <Link to="/" className="home-link">
            <h1>Stoneware</h1>
          </Link>
        </div>
        <div className="right-content">
          <SearchIcon className="nav-icon" />

          <PersonAddIcon className="nav-icon" />

          <ShoppingCartIcon className="nav-icon" />
        </div>
      </div>

      <NavBar />
      <NavBarMobile />
      <SideBar />
    </nav>
  );
}

export default TopNav;
