import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import Button from "../components/styled-component/Button.jsx";

export default function StartPage() {
  return (
    <>
      <div style={{ margin: "11rem 0" }}>
        <img
          src={Logo}
          style={{ width: "85%", height: "85%", margin: "1rem 0" }}
        />
        <div style={{ fontSize: "1.5rem" }}>WAGLE WAGLE VILLAGE</div>
      </div>
      <div>
        <Link to="/user/signup/signup">
          <Button
            children={"시작하기"}
            possible={true}
            style={{ fontSize: "1.3rem", fontWeight: 800 }}
          />
        </Link>
      </div>
      <div style={{ fontSize: "1.15rem", fontWeight: "300" }}>
        이미 계정이 있나요? <Link to="/user/login">로그인</Link>
      </div>
    </>
  );
}
