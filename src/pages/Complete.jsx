import React from "react";
import Button from "../components/styled-component/Button.jsx";
import { SignupDes } from "../components/styled-component/SignupDes";
import { Link } from "react-router-dom";

export default function Complete() {
  return (
    <>
      <SignupDes margin={"5rem 0"}>
        안녕하세요 콩나물님 <br /> 와글와글 빌리지에 오신걸 <br /> 환영합니다.
      </SignupDes>
      <Link to="/home">
        <Button possible={true} children={"다음에"} />
      </Link>
      <div>프로필은 마이페이지에서도 수정이 가능합니다!</div>
    </>
  );
}
