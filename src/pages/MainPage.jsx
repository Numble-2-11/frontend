import React from "react";
import Title from "../components/styled-component/Title.jsx";
import { ReactComponent as TextLogo } from "../images/TextLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Community() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextLogo style={{ width: "9.8rem", height: "2.1rem" }} />
        <GiHamburgerMenu size="24" />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Title children={"안녕하세요 콩나물님 :)"} />
      </div>
    </>
  );
}
