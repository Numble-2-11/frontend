import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <>
      <Link to="/signup">
        <button>시작하기</button>
      </Link>
      <div>
        이미 계정이 있나요? <Link to="/login">로그인</Link>
      </div>
    </>
  );
}
