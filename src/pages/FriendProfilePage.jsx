import React, { useState } from "react";
import FriendProfile from "../components/mypage/FriendProfile.jsx";
import Header2 from "./../components/Header2";
import FriendPosting from "./../components/mypage/FriendPosting";
import FriendButton from "./../components/mypage/FriendButton";

export default function FriendProfilePage() {
  const friendPostCount = useState(30);
  const [friend, setFriend] = useState(false);

  const handleClick = () => {
    setFriend(!friend);
  };

  return (
    <>
      <Header2 children={"와글인 소개"} />
      <FriendProfile />
      <FriendButton onClick={handleClick} value={friend} />

      <div
        style={{
          display: "flex",
          alignContent: "center",
          marginBottom: "1rem",
          fontSize: "1.3rem",
          fontWeight: "600",
        }}
      >
        <div style={{ marginRight: "0.5rem" }}>작성한 글</div>
        <div>{friendPostCount}</div>
      </div>
      <FriendPosting />
      <FriendPosting />
      <FriendPosting />
      <FriendPosting />
    </>
  );
}
