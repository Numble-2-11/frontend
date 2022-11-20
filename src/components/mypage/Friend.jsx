import React, { useState } from "react";
import friend from "../../images/friend.svg";

export default function Friend() {
  const [friendName, setFriendName] = useState("와글인 닉네임");
  const [temperature, setTemperature] = useState("80");

  return (
    <div style={{ display: "flex", marginBottom: "1.4rem" }}>
      <img src={friend} alt="friend" style={{ width: "17%" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "83%",
          marginLeft: "1.5rem",
        }}
      >
        <div style={{ textAlign: "left", fontSize: "1.35rem" }}>
          {friendName}
        </div>
        <div
          style={{
            textAlign: "left",
            fontSize: "1rem",
            fontWeight: "300",
            color: "#fff",
            opacity: "0.7",
          }}
        >
          마음 온도 {temperature}도
        </div>
      </div>
    </div>
  );
}
