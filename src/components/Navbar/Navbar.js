import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";
import GoogleAuth from "../GoogleAuth";

export default function Navbar({ auth }) {
  return (
    <nav className="navbar">
      <a href="./" cla>
        <div className="logo">
          <p>AnimeList</p>
        </div>
      </a>
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search Here..." />
      </div>
      <div className="nav-btn">
        <GoogleAuth />
      </div>
    </nav>
  );
}
