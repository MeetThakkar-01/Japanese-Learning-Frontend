import "./App.css";
import "react-slideshow-image/dist/styles.css";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
          {/* <Route exact path="/login/" component={Login} /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
