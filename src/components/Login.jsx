import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./../components/styled-component/Button";
import Input from "./../components/styled-component/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possible, setPossible] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else {
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
      // axios
      //   .post("http://localhost:4000/login", {
      //     id,
      //     password,
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
      <Link to="/home">
        <Button
          // onClick={handleSubmit}
          children={"로그인"}
          possible={possible}
        />
      </Link>
    </>
  );
}
