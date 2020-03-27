import React from "react";
import "./card.css";

function Card({ avatar, name, url, tips }) {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={avatar} className="card-img-top" alt="..." />
      </div>
      <div className="card-body text-dark">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-secondary">{tips}</p>
        <a href={url} className="btn btn-outline-info">
          More Info
        </a>
      </div>
    </div>
  );
}

export default Card;
