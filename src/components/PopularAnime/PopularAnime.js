import React from "react";
import "./PopularAnime.css";

import { connect } from "react-redux";

import { fetchAnimeDetails } from "../../actions/index";
import Loader from "../../images/Loader.gif";
import { Link } from "react-router-dom";

class PopularAnime extends React.Component {
  // fetchAnimeImg = async (id) => {
  //   const searchUrl = `https://api.jikan.moe/v3/anime/` + id;
  //   const res = await axios.get(searchUrl);
  // };
  componentDidMount() {
    this.props.fetchAnimeDetails();
  }
  render() {
    var { results, isLoading } = this.props.data;
    results = results.slice(0, 8);
    console.log(results);
    return (
      <>
        <div className="popular-anime">
          <h1>PopularAnime</h1>
          <hr />
        </div>
        <div className="flex flex-column ">
          <div className="anime-grid">
            {results.map((anime) => {
              return (
                <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items pointer">
                  <Link to={"/anime/" + anime.mal_id} key={anime.mal_id}>
                    <div className="anime-img">
                      <img
                        src={anime.image_url}
                        alt=""
                        height="250px"
                        width="auto"
                      />
                    </div>
                    <p className="center f4 tc pt1 strong">
                      {anime.anime_name}
                    </p>
                  </Link>
                </article>
              );
            })}

            <div>
              <img
                src={Loader}
                className={`search-loading ${isLoading ? "show" : "hide"} mv2`}
                alt="loader"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, {
  fetchAnimeDetails,
})(PopularAnime);
