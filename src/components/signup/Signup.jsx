import React, { useState, useEffect, useCallback } from "react";
import Input from "../../components/styled-component/Input.jsx";
import Button from "./../styled-component/Button.jsx";
import { SignupTitle } from "./SignupTitle.jsx";
import { SignupDes } from "./SignupDes.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Message from "./Message";

export default function Signup() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const [possible, setPossible] = useState(false);
  const navigate = useNavigate();

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isBirthday, setIsBirthday] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordconfirm, setIsPasswordconfirm] = useState(false);

  // 오류 메세지
  const [nameError, setNameError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordconfirmError, setPasswordconfirmError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", {
        name: name,
        birthday: birthday,
        email: email,
        password: password,
        passwordconfirm: passwordconfirm,
      })
      .then((res) => {
        if (res.success === true) {
          navigate("/signup/address");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      })
      .catch((err) => {
        navigate("/signup/address"); // 임시적으로 주소 입력 페이지로 이동
      });
  };

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    if (name.length < 2 || name.length > 5) {
      setNameError("이름은 2 ~ 5자리로 입력해주세요.");
      setIsName(false);
    } else {
      setIsName(true);
    }
  };

  const handleBirthDay = (e) => {
    const birthday = e.target.value;
    setBirthday(birthday);
    if (birthday.length !== 8) {
      setBirthdayError("생년월일은 8자리로 입력해주세요.");
      setIsBirthday(false);
    } else {
      setIsBirthday(true);
    }
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmail(email);
    if (emailRegex.test(email)) {
      setIsEmail(true);
    } else {
      setEmailError("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    setPassword(password);
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const handlePasswordconfirm = (e) => {
    const passwordconfirm = e.target.value;
    setPasswordconfirm(passwordconfirm);
    if (password !== passwordconfirm) {
      setPasswordconfirmError("비밀번호가 일치하지 않습니다.");
      setIsPasswordconfirm(false);
    } else {
      setIsPasswordconfirm(true);
    }
  };

  useEffect(() => {
    if (isName && isBirthday && isEmail && isPassword && isPasswordconfirm) {
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
      <Input type="text" name="name" onChange={handleName} value={name} />
      {name.length > 0 && isName ? null : <Message>{nameError}</Message>}
      <SignupTitle>생년월일</SignupTitle>
      <Input
        type="text"
        name="birthday"
        onChange={handleBirthDay}
        value={birthday}
        placeholder="예) 19990101"
      />
      {birthday.length > 0 && isBirthday ? null : (
        <Message>{birthdayError}</Message>
      )}
      <SignupTitle>이메일 주소</SignupTitle>
      <Input type="email" name="email" onChange={handleEmail} value={email} />
      {email.length > 0 && isEmail ? null : <Message>{emailError}</Message>}
      <SignupTitle>비밀번호 입력</SignupTitle>
      <Input
        type="password"
        name="password"
        onChange={handlePassword}
        value={password}
      />
      {password.length > 0 && isPassword ? null : (
        <Message>{passwordError}</Message>
      )}
      <SignupTitle>비밀번호 확인</SignupTitle>
      <Input
        type="password"
        name="passwordconfirm"
        onChange={handlePasswordconfirm}
        value={passwordconfirm}
      />
      {passwordconfirm.length > 0 && isPasswordconfirm ? null : (
        <Message>{passwordconfirmError}</Message>
      )}
      <Button
        onClick={handleSubmit}
        possible={possible}
        disabled={
          !(isName && isBirthday && isEmail && isPassword && isPasswordconfirm)
        }
      >
        계속하기
      </Button>
    </>
  );
}
