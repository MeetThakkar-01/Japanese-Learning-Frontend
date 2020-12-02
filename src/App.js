import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "react-slideshow-image/dist/styles.css";
import Slideshow from "./components/SlideShow/Slideshow";
import PopularAnime from "./components/PopularAnime/PopularAnime";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <PopularAnime />
      <Footer />
    </>
  );
}

export default App;
