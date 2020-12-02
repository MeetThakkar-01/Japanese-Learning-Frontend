import React from "react";
import { Slide } from "react-slideshow-image";
import "./SlideShow.css";

const Slideshow = () => {
  const slideImages = [
    "https://qph.fs.quoracdn.net/main-qimg-94bd90af7eda16e2d72e67556379e3e8",
    "https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=616%2C347&ssl=1",
    "https://static.fandomspot.com/images/06/7234/00-featured-izuku-midoriya-boku-no-hero-academia-anime-screenshot.jpg",
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", color: "black" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", color: "black" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  return (
    <Slide {...properties}>
      {slideImages.map((each, index) => (
        <div key={index} className="each-slide">
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${each})` }}
          >
            {/* <span>Slide {index + 1}</span> */}
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default Slideshow;
