import React from "react";
import "../../styles/NavBarMobile.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MenuIcon from "@material-ui/icons/Menu";

function NavBarMobile() {
  return (
    <div className="navbar-mobile">
      <div className="left-mobile">
        <MenuIcon className="nav-icon" />
        <h4>Menu</h4>
      </div>
      <div className="right-mobile">
        <SearchIcon className="nav-icon" />

        <PersonAddIcon className="nav-icon" />

        <ShoppingCartIcon className="nav-icon" />
      </div>
    </div>
  );
}

export default NavBarMobile;
