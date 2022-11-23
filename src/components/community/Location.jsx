import React, { useState } from "react";
import locationIcon from "../../images/location.svg";

export default function Location() {
  const [location, setLocation] = useState("강남구 역삼 1동");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        height: "2.5rem",
        background: "#272A33",
        borderRadius: "0.6rem",
        marginTop: "1rem",
        width: "fit-content",
      }}
    >
      <img
        src={locationIcon}
        alt="locationIcon"
        style={{ width: "1.2rem", height: "1.2rem", marginRight: "0.5rem" }}
      />
      <div style={{ fontSize: "1.15rem" }}>{location}</div>
    </div>
  );
}
