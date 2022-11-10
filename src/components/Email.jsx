import React, { useState, useEffect } from "react";
import Input from "./styled-component/Input.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./styled-component/Button.jsx";
import { SignupTitle } from "./styled-component/SignupTitle.jsx";
import { SignupDes } from "./styled-component/SignupDes.jsx";

export default function Email() {
  const [email, setEmail] = useState("");
  const [possible, setPossible] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    }
  };

  useEffect(() => {
    if (email) {
      setPossible(true);
    } else if (!email) {
      setPossible(false);
    }
  }, [email]);

  return (
    <>
      <SignupDes>
        와글와글 빌리지에서
        <br />
        이웃과 이야기를 나눠보세요!
      </SignupDes>

      <SignupTitle>이메일 주소가 필요해요</SignupTitle>
      <Input type="email" onChange={handleChange} value={email} />

      <Link to="/signup/address">
        <Button children={"계속하기"} possible={possible} />
      </Link>
    </>
  );
}
