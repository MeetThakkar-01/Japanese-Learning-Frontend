import React from "react";
import "./PopularAnime.css";

import { connect } from "react-redux";

import { fetchAnimeDetails } from "../../actions/index";
import Loader from "../../images/Loader.gif";

class PopularAnime extends React.Component {
  componentDidMount() {
    this.props.fetchAnimeDetails();
  }
  render() {
    const { results, isLoading } = this.props.data;
    console.log(isLoading);
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
                  <div className="anime-img">
                    <img
                      src={anime.imageUrl}
                      alt=""
                      height="250px"
                      width="auto"
                    />
                  </div>
                  <p className="center f4 tc pt1 strong">{anime.animeName}</p>
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
