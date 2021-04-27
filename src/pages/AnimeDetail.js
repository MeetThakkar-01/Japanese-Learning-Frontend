import React, { Component } from "react";
import "./AnimeDetail.css";
import { connect } from "react-redux";
import { fetchAnimeDetails } from "../actions/index";
import Loader from "../images/Loader.gif";
import { PieChart, BarChart } from "react-chartkick";
import "chart.js";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import axios from "axios";

class AnimeDetail extends Component {
  constructor(props) {
    //fixed
    super(props); //fixed
    this.state = {
      reportData: {},
      AnimeRecommendations: {},
      Difficulty: "",
    };
  }

  fetchAnime = async (mal_id) => {
    const searchUrl = `https://animereport.herokuapp.com/api/data/` + mal_id;
    const res = await axios.get(searchUrl);
    let detail = { ...this.state.AnimeDetail };
    let report = { ...this.state.reportData };
    // let Difficulty = { ...this.state.Difficulty };
    report = { ...res.data.stats };
    detail = { ...res.data.recommendations };
    // Difficulty = { ...res.data.stats.Difficulty };
    this.setState({ AnimeRecommendations: detail });
    this.setState({ reportData: report });
    this.setState({ Difficulty: res.data.stats.Difficulty });
    // console.log(this.state.Difficulty, "0000000000");
    // console.log(
    //   parseFloat(this.state.reportData["Difficulty"].split("/")[0] / 2.0),
    //   "abcdefg"
    // );
  };

  componentDidMount() {
    this.fetchAnime(this.props.match.params.animeId);
    this.props.fetchAnimeDetails();
  }
  render() {
    const { results, isLoading = true } = this.props.data;
    const currentId = this.props.match.params.animeId;

    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    const anime = results.filter((item) => {
      return String(item.mal_id) === String(currentId);
    });
    // const setReport = (data) => {
    //   this.setState({ reportData: data });
    // };
    // const getRecommendations = (recommendations) => {
    //   // let content = [];
    //   // return content;
    // };
    // console.log(isLoading);
    return (
      <div className="anime-information">
        {isLoading === false ? (
          <div className="container">
            <div className="information-container">
              <div className="image-container">
                <img src={anime[0].image_url} alt="anime" />
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
                  <span className="bold">Length (in words): </span>
                  <strong>{this.state.reportData["Length (in words)"]}</strong>
                </li>
                <li>
                  <span className="bold">Words (per minute): </span>
                  <strong>{this.state.reportData["Words (per minute)"]}</strong>
                </li>
                <li>
                  <span className="bold">Unique words: </span>
                  <strong>{this.state.reportData["Unique words"]}</strong>
                </li>
                <li>
                  <span className="bold">Unique words (used once): </span>
                  <strong>{this.state.reportData["Unique words"]}</strong>
                </li>
                <li>
                  <span className="bold">Unique words (used once %) </span>
                  <strong>{this.state.reportData["Unique words"]}</strong>
                </li>
                <li>
                  <span className="bold">Unique words (per minute): </span>
                  <strong>{this.state.reportData["Unique words"]}</strong>
                </li>
                <li>
                  <span className="bold">Unique kanji: </span>
                  <strong>{this.state.reportData["Unique words"]}</strong>
                </li>
                <li>
                  <span className="bold">Difficulty: </span>
                  <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={false}
                    value={
                      parseFloat(this.state.Difficulty.split("/")[0]) / 2.0
                    }
                  />
                </li>
                {/* <li>
                  <span className="bold">Episodes: </span>
                  <strong>{"anime[0].episodes"}</strong>
                </li> */}
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
                  data={[
                    [
                      "Length (in words)",
                      this.state.reportData["Length (in words)"],
                    ],
                    ["Unique words", this.state.reportData["Unique words"]],
                    [
                      "Unique words (used once)",
                      this.state.reportData["Unique words (used once)"],
                    ],
                    ["Unique kanji", this.state.reportData["Unique kanji"]],
                  ]}
                  xtitle="Words Count"
                  download={true}
                />
                <BarChart
                  width="402px"
                  // height="200px"
                  colors={["#00b", "#444"]}
                  data={[
                    [
                      "Words (per minute)",
                      this.state.reportData["Words (per minute)"],
                    ],
                    [
                      "Unique words (per minute)",
                      this.state.reportData["Unique words (per minute)"],
                    ],
                  ]}
                  xtitle="Words Per Minute"
                  download={true}
                />
                <div className="h4"></div>
                <PieChart
                  // width="20px"
                  // height="250px"
                  colors={["#b00", "#666"]}
                  data={[
                    [
                      "Unique words (used once %)",
                      this.state.reportData["Unique words (used once %)"],
                    ],
                    [
                      "Unique words (used multiple times %)",
                      100 -
                        parseInt(
                          this.state.reportData["Unique words (used once %)"]
                        ),
                    ],
                  ]}
                  label="Unique Words %"
                  download={true}
                  donut={true}
                />
              </div>
              <h3 className="section-header">People Also Watch</h3>
              <div className="anime-grid pa4">
                {
                  // recom = this.state.AnimeRecommendations;
                  Object.keys(this.state.AnimeRecommendations).map((key) => {
                    // console.log(recom[key], "ASDFGH");
                    const recom = this.state.AnimeRecommendations;
                    return (
                      <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items pointer">
                        <Link to={"/anime/" + key} key={key} target="_blank">
                          <div className="anime-img">
                            <img
                              src={recom[key].image_url}
                              alt=""
                              height="250px"
                              width="auto"
                            />
                          </div>
                          <p className="center f4 tc pt1 strong">
                            {recom[key].anime_name}
                          </p>
                        </Link>
                      </article>
                    );
                  })
                }
              </div>
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
