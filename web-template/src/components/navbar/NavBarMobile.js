import React from "react";
import "../../styles/NavBarMobile.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MenuIcon from "@material-ui/icons/Menu";
import { useGlobalContext } from "../../Context";

function NavBarMobile() {
  const { openSidebar } = useGlobalContext();

  return (
    <div className="navbar-mobile">
      <div className="left-mobile">
        <button className="btn-link" onClick={openSidebar}>
          <MenuIcon className="menu-icon" />
        </button>
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
