import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import Button from "../components/styled-component/Button.jsx";

export default function StartPage() {
  return (
    <>
      <div style={{ margin: "11rem 0" }}>
        <Logo width={210} height={210} style={{ margin: "2rem 0" }} />
        <div style={{ fontSize: "1.5rem" }}>WAGLE WAGLE VILLAGE</div>
      </div>
      <div>
        <Link to="/signup/signup">
          <Button children={"시작하기"} possible={true} />
        </Link>
      </div>
      <div>
        이미 계정이 있나요? <Link to="/login">로그인</Link>
      </div>
    </>
  );
}
