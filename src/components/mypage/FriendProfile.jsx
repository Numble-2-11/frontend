import React, { useState } from "react";
import styled from "styled-components";
import PostImg from "../../images/postImg.svg";

export default function FriendProfile() {
  const [friendProfile, setFriendProfile] = useState(PostImg);
  const [friendName, setFriendName] = useState("넘블러");
  const [friendTemp, setFriendTemp] = useState("4.9/5.0");
  const [friendIntro, setFriendIntro] = useState("");

  return (
    <div>
      <img
        src={friendProfile}
        style={{
          marginBottom: "1.2rem",
          borderRadius: "50%",
          width: "9rem",
          height: "9rem",
        }}
        alt="friendProfile"
      />
      <div style={{ fontSize: "1.3rem" }}>{friendName}</div>
      <div style={{ marginBottom: "2rem", opacity: "0.7" }}>{friendTemp}</div>
      <div style={{ marginBottom: "2rem", fontWeight: "400" }}>
        안녕하세요 공덕동에 얼마전에 이사 온 <br /> 25살 여자입니다! <br />
        공덕동 핵인싸가 되고 싶어요!
      </div>
    </div>
  );
}
