import React from "react";
import "./navbar.css";

function MyNav({ title2, title3 }) {
  return (
    <div className="" id="tag">
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="#">
          Home <i className="fas fa-arrow-circle-up fa"> </i>
        </a>
        <a className="navbar-brand" href="#footer">
          About <i className="fas fa-arrow-circle-down fa"> </i>
        </a>
        <a className="navbar-brand" href={title3}>
          {title2} <i className="fas fa-arrow-circle-right fa"> </i>
        </a>
      </nav>
    </div>
  );
}

export default MyNav;
