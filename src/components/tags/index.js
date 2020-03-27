import React from "react";
import "./tags.css";

function Tag({ name, id, handleClick, selectedId }) {
  let bgColor = id === selectedId ? "#0f525c" : "";
  let border = id === selectedId ? "1px solid #0f525c" : "";
  let color = id === selectedId ? "white" : "";

  return (
    <span
      id={id}
      name={name}
      className="tags"
      onClick={() => {
        handleClick({ id });
      }}
      style={{
        background: bgColor,
        border,
        color,
        fontSize: ".75rem",
        padding: ".5rem"
      }}
    >
      {name}
    </span>
  );
}

export default Tag;
