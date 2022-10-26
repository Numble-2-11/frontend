import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div>로그인 페이지입니다.</div>
      <div>
        <Link to="/home">
          <button>로그인</button>
        </Link>
      </div>
      <div>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </>
  );
}
