import React from "react";
import vid from "./Footage.mp4";
import logo from "./creatorlogo.jpg";
import "./video.css";

function Video() {
  return (
    <div>
      <video id="bgvid" autoPlay muted playsInline>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="caption">
        <h1>BERMUDA</h1>
        <h2>BEACHES</h2>
        <h3>A Local's Guide to the Island</h3>
      </div>
      <div className="credit">
        <a href="https://www.youtube.com/channel/UC5hZ2-v1h8hwkPQP7JkVE_g">
          Video Credit <img src={logo} alt="Johnny Fae Logo" /> Johnny Fae
        </a>
      </div>
    </div>
  );
}

export default Video;
