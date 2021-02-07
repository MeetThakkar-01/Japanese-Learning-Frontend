import React from "react";
import animeImages from "../consts";
export default function Catalogue() {
  return (
    <>
      <div className="popular-anime pa2">
        <h1>AnimeList</h1>
        <hr />
      </div>
      <div className="anime-grid pa4">
        {animeImages.map((animeImage) => {
          //   console.log("---->" + animeImage);
          return (
            <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items pointer">
              <div className="anime-img">
                <img src={animeImage} alt="" height="250px" width="auto" />
              </div>
              <p className="center f4 tc pt1 strong">Anime Name</p>
            </article>
          );
        })}

        {/* <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
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
        </article> */}
      </div>
    </>
  );
}
