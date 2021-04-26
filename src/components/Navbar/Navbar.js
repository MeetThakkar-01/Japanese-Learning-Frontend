import React from "react";
// import SearchIcon from "@material-ui/icons/Search";
import PageLinks from "../../constants/links";
import { FaAlignRight } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ auth, toggleSidebar, isOpen }) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">AnimeList</div>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <div className="flex items-center justify-end">
          <PageLinks styleClass="nav-links"></PageLinks>
          <ul>
            <li className="nav-links page-links">
              <a href="https://forum-japanese.eastus.cloudapp.azure.com/">
                Forum
              </a>
            </li>
          </ul>
          {/* <div className="gAuth">
            <GoogleAuth />
          </div> */}
        </div>
      </div>
    </nav>
  );
}
