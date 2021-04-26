import React from "react";
import "./PopularAnime.css";

import { connect } from "react-redux";

import { fetchAnimeDetails } from "../../actions/index";
import Loader from "../../images/Loader.gif";
import { Link } from "react-router-dom";
import axios from "axios";
import rateLimit from 'axios-rate-limit';

class PopularAnime extends React.Component {
  // Trying to store img url in state
  constructor(props) {
    super(props);
    this.state = {
      AnimeImg: {},
      ids: []
     
    };
    this.results={}
    this.fetchAnimeImg = this.fetchAnimeImg.bind(this)
    this.fetchAnime= this.fetchAnime.bind(this)
  }

  //Fetching Anime URL and returning Promise
  fetchAnimeImg = async (id) => {
    try{
     
    const http=rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 150}); //rate Limiting to 1 req per 100ms
    
    console.log("Checking if "+id,"in ids...")
    
    if (!(id in this.state.ids) ){
      console.log(id +"not in ids , so pushing it")
      let ids= this.state.ids
      ids.push(id)
      this.setState(ids)

      console.log("making api call to get url for "+id);
      const searchUrl = `https://api.jikan.moe/v3/anime/` + id;
      const res = await http.get(searchUrl);
      console.log(res.data.image_url);
      let Img= {...this.state.AnimeImg}
      
        console.log("updating the id:"+id," with url:",res.data.image_url)
        Img[id]=res.data.image_url
        this.setState({ AnimeImg: Img })

        console.log("AnimeImg:",JSON.stringify(this.state.AnimeImg))
      
      
      }
    }
    catch(err){
      console.log("Error"+err);
      //retry after a random interval
      setTimeout(()=>{this.fetchAnimeImg(id)} ,Math.random()*1000);
    }
    
  };
  fetchAnime() {
    console.log("calling fetchAnimeDetails()")
    this.props.fetchAnimeDetails()
    this.props.data.results.slice(0,8).map((anime)=> {
      console.log("calling fetch")
      this.fetchAnimeImg(anime.mal_id)
    })

  }
  componentDidMount() {
    console.log("component mount start");
    this.fetchAnime()

    
  }
  render() {
    var { results, isLoading } = this.props.data;
    results = results.slice(0, 8);
    

    return (
      <>
        <div className="popular-anime">
          <h1>PopularAnime</h1>
          <hr />
        </div>
        <div className="flex flex-column ">
          <div className="anime-grid">
            {results.map((anime) => {
              //Consuming Api but not able to acess LInk
              // Getting Pending Promise As a response
              return (
                <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items pointer">
                  <Link to={"/anime/" + anime.mal_id} key={anime.mal_id}>
                    <div className="anime-img">
                      <img
                        src={this.state.AnimeImg[anime.mal_id]}
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
