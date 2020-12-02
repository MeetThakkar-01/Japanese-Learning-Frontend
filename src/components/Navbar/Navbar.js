import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";

export default function Navbar() {
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
        <button className="btn bg-white shadow-0 blue">LogIn</button>
        <button className="btn bg-blue shadow-0 white">SignUp</button>
      </div>
    </nav>
  );
}
