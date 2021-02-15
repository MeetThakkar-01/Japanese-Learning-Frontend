import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "gatsby";

// const toggleSideBar = false;
const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Catalogue",
    url: "/catalogue/",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!
// const PageLinks;
const PageLinks = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};

export default PageLinks;
