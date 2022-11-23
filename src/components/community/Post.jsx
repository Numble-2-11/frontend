import React, { useState } from "react";
import PostImg from "../../images/postImg.svg";

export default function Post() {
  const [postTitle, setPostTtile] = useState(
    "안방에, 가벽을 세우려면 예산이 대략 얼마나 들까요"
  );
  const [postAuthor, setPostAuthor] = useState("김클린");
  const [postDate, setDate] = useState("2020.02.17");
  const [postImg, setPostImg] = useState(PostImg);

  const [postComment, setPostComment] = useState(0);
  const [postInquire, setPostInquire] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "1rem",
        }}
      >
        <div
          style={{
            width: "75%",
            textAlign: "left",
            fontSize: "1.3rem",
            display: "flex",
            flexDirection: "column",
            marginBottom: "0.2rem",
            justifyContent: "space-between",
          }}
        >
          <div>{postTitle}</div>
          <div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: "300",
                color: "#fff",
                opacity: "70%",
              }}
            >
              {postAuthor}
            </div>
          </div>
        </div>
        <img
          src={postImg}
          style={{ width: "25%", marginLeft: "2rem" }}
          alt="postImg"
        />
      </div>
      <div
        style={{
          display: "flex",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgba(255, 255, 255, .3)",
          fontSize: "1.1rem",
          color: "#fff",
          opacity: "70%",
        }}
      >
        <div style={{ fontWeight: "300", marginRight: "3rem" }}>{postDate}</div>
        <div style={{ fontWeight: "300", marginRight: "3rem" }}>
          댓글 {postComment}
        </div>
        <div>조회 {postInquire}</div>
      </div>
    </>
  );
}
