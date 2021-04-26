import React, { Component } from "react";
import "./AnimeDetail.css";
import { connect } from "react-redux";
import { fetchAnimeDetails } from "../actions/index";
import Loader from "../images/Loader.gif";
import { PieChart, BarChart } from "react-chartkick";
import "chart.js";
import ReactStars from "react-rating-stars-component";

class AnimeDetail extends Component {
  state = {
    reportData: [
      [
        ["Length (in words)", 1184],
        ["Unique words", 432],
        ["Unique words (used once)", 258],
        ["Unique kanji", 244],
      ],
      [
        ["Words (per minute)", 432],
        ["Unique words (per minute)", 17.8],
      ],
      [
        ["Unique words (used once %)", 59],
        ["Unique words (used multiple times %)", 100 - 59],
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
      return String(item.mal_id) === String(currentId);
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
                <img
                  src={
                    "https://cdn.myanimelist.net/images/anime/1900/110097.jpg"
                  }
                  alt="anime"
                />
              </div>

              <h3 className="section-header">Title</h3>
              <ul>
                <li>
                  {/* <span className="bold">English: </span> */}
                  <strong>{anime[0].anime_name}</strong>
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
                  <strong>{"anime[0].episodes"}</strong>
                </li>
                <li>
                  <span className="bold">MAL Link: </span>
                  {
                    <a
                      href={"https://myanimelist.net/anime/" + anime[0].mal_id}
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
              <div className="flex flex-wrap chart justify-center items-center">
                <BarChart
                  width="400px"
                  // height="300px"
                  colors={["#0b0", "#666"]}
                  data={reportData[0]}
                  xtitle="Words Count"
                  download={true}
                />
                <BarChart
                  width="402px"
                  // height="200px"
                  colors={["#00b", "#444"]}
                  data={reportData[1]}
                  xtitle="Words Per Minute"
                  download={true}
                />
                <div className="h4"></div>
                <PieChart
                  // width="20px"
                  // height="250px"
                  colors={["#b00", "#666"]}
                  data={reportData[2]}
                  label="Unique Words %"
                  download={true}
                  donut={true}
                />
              </div>
              <h3 className="section-header">People Also Watch</h3>
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
