import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";
import GoogleAuth from "../GoogleAuth";

export default function Navbar({ auth }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>AnimeList</p>
      </div>
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
