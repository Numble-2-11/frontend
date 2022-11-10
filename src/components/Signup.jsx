import React, { useState, useEffect } from "react";
import Input from "../components/styled-component/Input.jsx";
import { Link } from "react-router-dom";
import Button from "./styled-component/Button.jsx";
import { SignupTitle } from "./styled-component/SignupTitle.jsx";
import { SignupDes } from "./styled-component/SignupDes.jsx";

export default function Signup() {
  const [name, setName] = useState("");
  const [commu, setCommu] = useState("");
  const [residentNum, setResidentNum] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [confirmPhone, setConfirmPhone] = useState(false);
  const [possible, setPossible] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "commu") {
      setCommu(e.target.value);
    } else if (e.target.name === "residentNum") {
      setResidentNum(e.target.value);
    } else if (e.target.name === "phoneNum") {
      setPhoneNum(e.target.value);
    } else if (e.target.name === "confirmPhone") {
      setConfirmPhone(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("이름을 입력해주세요.");
    } else if (!commu) {
      return alert("통신사를 입력해주세요.");
    } else if (!residentNum) {
      return alert("주민번호를 입력해주세요.");
    } else if (!phoneNum) {
      return alert("휴대폰 번호를 입력해주세요.");
    } else if (!confirmPhone) {
      return alert("휴대폰 인증을 해주세요.");
    } else {
      // axios
      //   .post("http://localhost:4000/signup", {
      //     name,
      //     commu,
      //     residentNum,
      //     phoneNum,
      //     confirmPhone,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  useEffect(() => {
    if (name && commu && residentNum && phoneNum && confirmPhone) {
      setPossible(true);
    } else if (!name || !commu || !residentNum || !phoneNum || !confirmPhone) {
      setPossible(false);
    }
  }, [name, commu, residentNum, phoneNum, confirmPhone]);

  return (
    <>
      <SignupDes>
        와글와글 빌리지에서
        <br />
        이웃과 이야기를 나눠보세요!
      </SignupDes>

      <SignupTitle>이름</SignupTitle>
      <Input type="text" name="name" onChange={handleChange} value={name} />
      <SignupTitle>통신사</SignupTitle>
      <Input type="text" name="commu" onChange={handleChange} value={commu} />
      <SignupTitle>주민등록번호</SignupTitle>
      <Input
        type="text"
        name="residentNum"
        onChange={handleChange}
        value={residentNum}
      />
      <SignupTitle>휴대폰번호</SignupTitle>
      <Input
        type="text"
        name="phoneNum"
        onChange={handleChange}
        value={phoneNum}
      />
      <SignupTitle>휴대폰번호 인증</SignupTitle>
      <Input
        type="text"
        name="confirmPhone"
        onChange={handleChange}
        value={confirmPhone}
      />

      <Link to="/signup/email">
        <Button
          children={"계속하기"}
          possible={possible}
          // onClick={handleClick}
        />
      </Link>
    </>
  );
}
