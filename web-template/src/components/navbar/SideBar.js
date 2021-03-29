import React from "react";
import "../../styles/SideBar.css";
import subLinks from "../../subMenuLinks";
import { useGlobalContext } from "../../Context";
import CloseIcon from "@material-ui/icons/Close";
import SideBarMenu from "./SideBarMenu";

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
          <CloseIcon className="close-icon" />
        </button>
        <div className="sidebar-links">
          {subLinks.map((item, index) => {
            const { page, pageURL, links } = item;
            return (
              <div key={index} className="sidebar-item">
                <SideBarMenu page={page} pageURL={pageURL} links={links} />
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
