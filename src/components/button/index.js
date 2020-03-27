import React from "react";
import "./button.css";

function Button({ title }) {
  return <button className="btn btn-outline-light btn-lg">{title}</button>;
}
export default Button;
