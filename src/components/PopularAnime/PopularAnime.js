import React from "react";
import "./PopularAnime.css";

function PopularAnime() {
  const animeImages = [
    "https://cdn.shopify.com/s/files/1/1878/3879/products/N4849.jpg?v=1557246359",
    "https://i.pinimg.com/474x/31/91/7a/31917a0e7d570cb2c45a25896187f86a.jpg",
    "https://cdn.shopify.com/s/files/1/0747/3829/products/mL0231_1024x1024.jpg?v=1571444809",
    "https://images-na.ssl-images-amazon.com/images/I/81Uu-Z2zYhL._AC_SL1500_.jpg",
    "https://i.ebayimg.com/images/g/KzEAAOSwv8Fdq8Jj/s-l300.jpg",
    "https://cdn.europosters.eu/image/350/posters/one-punch-man-collage-i33906.jpg",
  ];
  return (
    <>
      <div className="popular-anime">
        <h1>PopularAnime</h1>
        <hr />
      </div>
      <div className="anime-grid">
        <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[0]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[1]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[2]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[3]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[4]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[5]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[5]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[5]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
      </div>
    </>
  );
}

export default PopularAnime;
