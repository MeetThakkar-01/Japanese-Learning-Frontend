import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnimeDetails } from "../actions/index";

class Catalogue extends Component {
  componentDidMount() {
    this.props.fetchAnimeDetails();
  }

  render() {
    const { results } = this.props.data;
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