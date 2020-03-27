import React, { Component } from "react";
import Video from "./components/videoplayer";
import Button from "./components/button";
import Carousel from "./components/Carousel";
import "./App.css";

class App extends Component {
  // TODO:
  // finish onClick to scroll page
  // build form to input locations
  // push to github

  render() {
    return (
      <div className="App">
        <Video />
        <a href="#tag" id="#explore ">
          <Button title="Explore" />
        </a>
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
          <Carousel />
          <span id="move-up">
            <a
              href="#tag"
              alt="scrolls up"vc
              className="fas fa-arrow-circle-up fa-2x"
            ></a>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
