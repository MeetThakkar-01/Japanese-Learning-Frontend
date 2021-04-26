import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAnimeDetails } from "../actions/index";
import Loader from "../images/Loader.gif";
import Pagination from "../components/Pagination";

class Catalogue extends Component {
  state = { currentPage: 1, postsPerPage: 32 };
  componentDidMount() {
    this.props.fetchAnimeDetails();
  }
  render() {
    const { results, isLoading = true } = this.props.data;
    const idxLastAnime = this.state.currentPage * this.state.postsPerPage;
    const idxFirstAnime = idxLastAnime - this.state.postsPerPage;
    const dispAnime = results.slice(idxFirstAnime, idxLastAnime);

    const paginate = (pageNumber) =>
      this.setState({
        currentPage: pageNumber,
        postsPerPage: this.state.postsPerPage,
      });

    return (
      <>
        <div className="popular-anime pa2">
          <h1>AnimeList</h1>
          <hr />
        </div>
        <div className="anime-grid pa4">
          {dispAnime.map((anime) => {
            //   console.log("---->" + animeImage);
            return (
              <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items pointer">
                <Link to={"/anime/" + anime.mal_id} key={anime.mal_id}>
                  <div className="anime-img">
                    <img
                      src={
                        "https://cdn.myanimelist.net/images/anime/1900/110097.jpg"
                      }
                      alt=""
                      height="250px"
                      width="auto"
                    />
                  </div>
                  <p className="center f4 tc pt1 strong">{anime.anime_name}</p>
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

        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={results.length}
          paginate={paginate}
        />
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
