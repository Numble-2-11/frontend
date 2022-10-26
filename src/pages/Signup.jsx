import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div>회원가입 페이지입니다.</div>
      <Link to="/home">
        <button>가입하기</button>
      </Link>
    </>
  );
}
