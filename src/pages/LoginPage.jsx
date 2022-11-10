import React from "react";
import { Link } from "react-router-dom";
import Login from "./../components/Login";
import Header from "../components/Header";

export default function LoginPage() {
  return (
    <>
      <Header children={"로그인"} />
      <Login />
      <div>
        계정이 없으신가요? <Link to="/signup/signup">회원가입</Link>
      </div>
    </>
  );
}
