import React, { useState, useEffect } from "react";
import Input from "../components/styled-component/Input.jsx";
import Button from "./styled-component/Button.jsx";
import { SignupTitle } from "./styled-component/SignupTitle.jsx";
import { SignupDes } from "./styled-component/SignupDes.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const [possible, setPossible] = useState(false);
  const [signup, setSignup] = useState(false); // 회원가입 성공 여부
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "birthday") {
      setBirthday(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "passwordconfirm") {
      setPasswordconfirm(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("이름을 입력해주세요.");
    } else if (!birthday) {
      return alert("생년월일을 입력해주세요.");
    } else if (birthday.length !== 6) {
      return alert("생년월일을 6자리로 입력해주세요.");
    } else if (!email) {
      return alert("이메일을 입력해주세요.");
    } else if (!password) {
      return alert("비밀번호를 입력해주세요.");
    } else if (!passwordconfirm) {
      return alert("비밀번호 확인을 입력해주세요.");
    } else if (password !== passwordconfirm) {
      return alert("비밀번호가 일치하지 않습니다.");
    } else {
      axios
        .post("", {
          name: name,
          birthday: birthday,
          email: email,
          password: password,
          passwordconfirm: passwordconfirm,
        })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            setSignup(true);
            alert("회원가입이 완료되었습니다.");
            navigate("/signup/address");
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/signup/address"); // 임시적으로 주소 입력 페이지로 이동
        });
    }
  };

  useEffect(() => {
    if (name && birthday && email && password && passwordconfirm) {
      setPossible(true);
    } else {
      setPossible(false);
    }
  }, [name, birthday, email, password, passwordconfirm]);

  return (
    <>
      <SignupDes>
        와글와글 빌리지에서
        <br />
        이웃과 이야기를 나눠보세요!
      </SignupDes>

      <SignupTitle>이름</SignupTitle>
      <Input type="text" name="name" onChange={handleChange} value={name} />
      <SignupTitle>생년월일</SignupTitle>
      <Input
        type="text"
        name="birthday"
        onChange={handleChange}
        value={birthday}
      />
      <SignupTitle>이메일 주소</SignupTitle>
      <Input type="text" name="email" onChange={handleChange} value={email} />
      <SignupTitle>비밀번호 입력</SignupTitle>
      <Input
        type="text"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <SignupTitle>비밀번호 확인</SignupTitle>
      <Input
        type="text"
        name="passwordconfirm"
        onChange={handleChange}
        value={passwordconfirm}
      />
      <Button onClick={handleClick} possible={possible}>
        계속하기
      </Button>
    </>
  );
}
