import React from "react";
// import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";
import PopularAnime from "../components/PopularAnime/PopularAnime";
import Slideshow from "../components/SlideShow/Slideshow";

function Home() {
  return (
    <div>
      <Slideshow />
      <PopularAnime />
      <div className="flex justify-center">
        <a
          className="f6 link dim ph3 pv2 mb2 dib white bg-blue "
          href="/catalogue"
        >
          Show More
        </a>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
