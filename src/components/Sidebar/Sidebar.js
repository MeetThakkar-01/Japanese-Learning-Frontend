import React from "react";
import "./Sidebar.css";
// import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";
import PageLinks from "../../constants/links";
// import { GoogleAuth } from "../GoogleAuth";
const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <div className="flex flex-column items-center" onClick={toggleSidebar}>
          <PageLinks styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
