import React from "react";
import { Link } from "react-router-dom";
import Login from "./../components/login/Login";
import Header from "../components/Header";
import loginLogo from "../images/loginLogo.svg";

export default function LoginPage() {
  return (
    <>
      <Header children={"이메일 로그인"} marginBottom={"5rem"} />
      <Login />
      <div>
        계정이 없으신가요? <Link to="/signup/signup">회원가입</Link>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={loginLogo}
          style={{
            height: "25rem",
            weight: "25rem",
            transform: "translateX(2.4rem) translateY(4rem)",
          }}
        />
      </div>
    </>
  );
}
