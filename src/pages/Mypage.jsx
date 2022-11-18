import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import List from "../components/List.jsx";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import OutSpan from "./../components/mypage/OutSpan";
import ProfileImg, { Img } from "../components/styled-component/ProfileImg";

export default function Mypage() {
  const { id } = useParams();
  const [selected, setSelected] = useState(1);

  const list = [
    { text: "프로필", url: "profile", id: "1" },
    { text: "친구 목록", url: "friendList", id: "2" },
    { text: "내가 쓴 글", url: "myWriting", id: "3" },
  ];

  const handleClick = (e) => {
    if (e.target.outerText === "프로필") {
      setSelected(1);
    } else if (e.target.outerText === "친구 목록") {
      setSelected(2);
    } else if (e.target.outerText === "내가 쓴 글") {
      setSelected(3);
    }
  };

  return (
    <>
      <Header children={"마이페이지"} />
      <ProfileImg />
      <Container>
        {list.map((item) => (
          <Link
            to={item.url}
            key={item.id}
            onClick={handleClick}
            style={{ display: "flex", width: "100%" }}
          >
            <List isSelected={selected == item.id} style={{ flex: 1 }}>
              {item.text}
            </List>
          </Link>
        ))}
      </Container>
      <Outlet />
      <div style={{ display: "flex" }}>
        <OutSpan style={{ marginRight: "1rem" }}>탈퇴하기</OutSpan>
        <OutSpan>로그아웃</OutSpan>
      </div>
    </>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 2.6rem;
`;
