import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../styled-component/Button";
import Input from "../styled-component/Input";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possible, setPossible] = useState(false);
  const navigate = useNavigate();

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
      const data = {
        email: email,
        password: password,
      };
      axios
        .post("url", JSON.stringify(data), {
          header: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data === "success") {
            console.log("res.data.accessToken : " + res.data);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + res.data;
            // 로그인 성공일 경우 메인으로 이동
            navigate("/main");
          } else {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
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
        style={{ marginBottom: "1.5rem" }}
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
