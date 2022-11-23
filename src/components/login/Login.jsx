import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../styled-component/Button";
import Input from "../styled-component/Input";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginState } from "../../states/LoginState";
import { EmailState, PasswordState } from "../../states/UserState";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possible, setPossible] = useState(false); // 버튼 활성화
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState); // 로그인 성공 여부
  const setEmailState = useSetRecoilState(EmailState);
  const setPasswordState = useSetRecoilState(PasswordState);

  const handleChange = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("이메일을 입력해주세요.");
    } else if (!password) {
      return alert("비밀번호를 입력해주세요.");
    } else {
      // ID, PW 모두 입력한 경우
      axios
        .post(`url`, {
          email: email,
          password: password,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data === "success") {
            setIsLoggedIn(true);
            setEmailState(email);
            setPasswordState(password);
          } else {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
          }
          // 로그인 성공일 경우 메인으로 이동
          if (isLoggedIn) {
            navigate("/main");
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
          navigate("/main"); // 임시적으로 로그인 시 메인으로 이동
        });
    }
  };

  useEffect(() => {
    if (email && password) {
      setPossible(true);
    } else if (!email || !password) {
      setPossible(false);
    }
  }, [email, password]);

  return (
    <>
      <Input
        type="email"
        placeholder="이메일"
        onChange={handleChange}
        value={email}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        onChange={handleChange}
        value={password}
      />
      <Button onClick={handleSubmit} children={"로그인"} possible={possible} />
    </>
  );
}
