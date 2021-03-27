import React from "react";
import "../../styles/SideBar.css";
import subLinks from "../../subMenuLinks";
import { useGlobalContext } from "../../Context";
import CloseIcon from "@material-ui/icons/Close";

function SideBar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <CloseIcon />
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
