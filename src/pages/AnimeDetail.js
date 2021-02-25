import React, { Component } from "react";
import "./AnimeDetail.css";
import { connect } from "react-redux";
import { fetchAnimeDetails } from "../actions/index";
import Loader from "../images/Loader.gif";
import { ColumnChart } from "react-chartkick";
import "chart.js";
import ReactStars from "react-rating-stars-component";

class AnimeDetail extends Component {
  state = {
    reportData: [
      [
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 28],
        ["wed", 28],
        ["thurs", 28],
        ["fri", 28],
      ],
      [
        ["Sun", 25],
        ["Mon", 12],
        ["Tue", 46],
        ["wed", 33],
        ["thurs", 47],
        ["fri", 69],
      ],
      [
        ["Sun", 26],
        ["Mon", 37],
        ["Tue", 78],
        ["wed", 96],
        ["thurs", 45],
        ["fri", 83],
      ],
    ],
  };
  componentDidMount() {
    this.props.fetchAnimeDetails();
  }
  render() {
    const { results, isLoading = true } = this.props.data;
    const currentId = this.props.match.params.animeId;
    const reportData = this.state.reportData;

    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    const anime = results.filter((item) => {
      return item._id === currentId;
    });
    const setReport = (data) => {
      this.setState({ reportData: data });
    };
    const getEpisodes = (episodes) => {
      let content = [];
      for (let i = 0; i < episodes; i++) {
        content.push(
          <article className="mw5 center bg-white br3 mv3 b--black-10 grid-items pointer">
            <strong>
              <p
                className="center f4 tc pt1 strong blue"
                onClick={() =>
                  setReport([
                    [
                      ["test " + (i + 1), (i + 1) * 10],
                      ["test " + (i + 2), (i + 1) * 20],
                      ["test " + (i + 3), (i + 1) * 30],
                    ],
                    [
                      ["test " + (i + 1), (i + 1) * 40],
                      ["test " + (i + 2), (i + 1) * 50],
                      ["test " + (i + 3), (i + 1) * 60],
                    ],
                    [
                      ["test " + (i + 1), (i + 1) * 70],
                      ["test " + (i + 2), (i + 1) * 80],
                      ["test " + (i + 3), (i + 1) * 90],
                    ],
                  ])
                }
              >
                Episode {i + 1}
              </p>
            </strong>
          </article>
        );
      }
      return content;
    };
    // console.log(isLoading);
    return (
      <div className="anime-information">
        {isLoading === false ? (
          <div className="container">
            <div className="information-container">
              <div className="image-container">
                <img src={anime[0].imageUrl} alt="anime" />
              </div>

              <h3 className="section-header">Title</h3>
              <ul>
                <li>
                  {/* <span className="bold">English: </span> */}
                  <strong>{anime[0].animeName}</strong>
                </li>
              </ul>

              <h3 className="section-header">Information</h3>
              <ul>
                <li>
                  <span className="bold">Ratings: </span>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </li>
                <li>
                  <span className="bold">Episodes: </span>
                  <strong>{anime[0].episodes}</strong>
                </li>
                <li>
                  <span className="bold">MAL Link: </span>
                  {
                    <a
                      href={"https://myanimelist.net/anime/" + anime[0].idMAL}
                      target=" "
                    >
                      <strong>Click Here</strong>
                    </a>
                  }
                </li>
              </ul>
              <h3 className="section-header">Tags</h3>
              <ul>
                <div
                  className="flex flex-wrap tag-container"
                  id="tag-container"
                >
                  <span class="dashfolio-tag">AudioBook</span>
                  <span class="dashfolio-tag">Kanji</span>
                  <span class="dashfolio-tag">Japanese Literature</span>
                  <span class="dashfolio-tag">Word Report</span>
                </div>
              </ul>
            </div>

            <div className="content-container">
              {/* <h3 className="section-header">Synopsis</h3>
            {
              "Humans and demons are two sides of the same coin, as are Assiah and Gehenna, their respective worlds. The only way to travel between the realms is by the means of possession, like in ghost stories. However, Satan, the ruler of Gehenna, cannot find a suitable host to possess and therefore, remains imprisoned in his world. In a desperate attempt to conquer Assiah, he sends his son instead, intending for him to eventually grow into a vessel capable of possession by the demon king. Ao no Exorcist follows Rin Okumura who appears to be an ordinary, somewhat troublesome teenager—that is until one day he is ambushed by demons. His world turns upside down when he discovers that he is in fact the very son of Satan and that his demon father wishes for him to return so they can conquer Assiah together. Not wanting to join the king of Gehenna, Rin decides to begin training to become an exorcist so that he can fight to defend Assiah alongside his brother Yukio. [Written by MAL Rewrite]"
            } */}
              <h3 className="section-header">Stats</h3>
              <div className="flex flex-wrap chart justify-around">
                <ColumnChart
                  width="200px"
                  height="200px"
                  colors={["#0b0", "#666"]}
                  data={reportData[0]}
                />

                <ColumnChart
                  width="200px"
                  height="200px"
                  colors={["#00b", "#444"]}
                  data={reportData[1]}
                />

                <ColumnChart
                  width="200px"
                  height="200px"
                  colors={["#b00", "#666"]}
                  data={reportData[2]}
                />
              </div>
              <h3 className="section-header">Episodes</h3>
              <div className="anime-grid">{getEpisodes(anime[0].episodes)}</div>
            </div>
          </div>
        ) : (
          <img
            src={Loader}
            className={`search-loading ${isLoading ? "show" : "hide"} mv2`}
            alt="loader"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, {
  fetchAnimeDetails,
})(AnimeDetail);
