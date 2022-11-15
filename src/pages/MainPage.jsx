import React from "react";
import Title from "../components/styled-component/Title.jsx";
import { ReactComponent as TextLogo } from "../images/TextLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Community() {
  return (
    <>
      <TextLogo width={98} height={21} style={{ float: "left" }} />
      <GiHamburgerMenu size="24" style={{ float: "right" }} />
      <br /> <br />
      <Title children={"안녕하세요 콩나물님"} style={{ float: "left" }} />
    </>
  );
}
