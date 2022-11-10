import React from "react";
import Title from "../components/styled-component/Title";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header children={"회원가입"} />
      <Outlet />
    </>
  );
}
