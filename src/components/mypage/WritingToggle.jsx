import React, { useState } from "react";
import arrow_down from "../../images/arrow_down.svg";
import arrow_up from "../../images/arrow_up.svg";
import Post from "../community/Post";

export default function WritingToggle({ context }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2.5rem 1rem 0 1rem",
        }}
      >
        <div style={{ fontSize: "1.2rem" }}>{context}</div>
        {isOpen ? (
          <img
            src={arrow_up}
            alt="arrow_up"
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img src={arrow_down} alt="arrow_down" onClick={handleToggle} />
        )}
      </div>
      <ul
        style={{
          display: isOpen ? "block" : "none",
          padding: "0 1rem",
        }}
      >
        <Post />
      </ul>
    </>
  );
}
