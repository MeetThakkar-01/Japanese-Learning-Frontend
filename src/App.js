import "./App.css";
import "react-slideshow-image/dist/styles.css";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Catalogue from "./pages/Catalogue";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route exact path="/catalogue/" component={Catalogue} />
          <Route exact path="/profile/" component={Profile} />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
