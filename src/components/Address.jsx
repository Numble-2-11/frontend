import React, { useState, useEffect } from "react";
import Input from "./styled-component/Input.jsx";
import styled from "styled-components";
import Button from "./styled-component/Button.jsx";
import { SignupTitle } from "./styled-component/SignupTitle.jsx";
import { SignupDes } from "./styled-component/SignupDes.jsx";
import { Link } from "react-router-dom";

export default function Address() {
  const [address, setAddress] = useState("");
  const [possible, setPossible] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "address") {
      setAddress(e.target.value);
    }
  };

  useEffect(() => {
    if (address) {
      setPossible(true);
    } else if (!address) {
      setPossible(false);
    }
  }, [address]);

  return (
    <>
      <SignupDes>주소를 입력해주세요</SignupDes>
      <SignupTitle>주소</SignupTitle>
      <Input
        type="text"
        name="address"
        onChange={handleChange}
        value={address}
      />
      <Link to="/completed">
        <Button children={"완료"} possible={possible} />
      </Link>
    </>
  );
}
