import React, { useState } from "react";
import Header2 from "./../components/Header2";
import FriendPosting from "./../components/mypage/FriendPosting";

export default function FriendProfilePage() {
  const friendPostCount = useState(30);

  return (
    <>
      <Header2 children={"와글인 소개"} />
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
