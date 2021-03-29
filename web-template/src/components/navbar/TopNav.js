import React from "react";
import "../../styles/TopNav.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useGlobalContext } from "../../Context";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";

function TopNav() {
  const { closeSubMenu } = useGlobalContext();

  return (
    <nav className="topNav">
      <div className="top-row" onMouseOver={closeSubMenu}>
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
    </nav>
  );
}

export default TopNav;
