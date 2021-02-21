import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAnimeDetails } from "../actions/index";
import Loader from "../images/Loader.gif";

class Catalogue extends Component {
  componentDidMount() {
    this.props.fetchAnimeDetails();
  }

  render() {
    const { results, isLoading = true } = this.props.data;
    console.log(isLoading);
    return (
      <>
        <div className="popular-anime pa2">
          <h1>AnimeList</h1>
          <hr />
        </div>
        <div className="anime-grid pa4">
          {results.map((anime) => {
            //   console.log("---->" + animeImage);
            return (
              <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items pointer">
                <Link to={"/anime/" + anime._id} key={anime._id}>
                  <div className="anime-img">
                    <img
                      src={anime.imageUrl}
                      alt=""
                      height="250px"
                      width="auto"
                    />
                  </div>
                  <p className="center f4 tc pt1 strong">{anime.animeName}</p>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, {
  fetchAnimeDetails,
})(Catalogue);
