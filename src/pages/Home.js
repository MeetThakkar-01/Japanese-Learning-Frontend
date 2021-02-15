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

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
