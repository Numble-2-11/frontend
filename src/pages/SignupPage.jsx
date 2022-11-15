import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function SignupPage() {
  return (
    <>
      <Header children={"회원가입"} />
      <Outlet />
    </>
  );
}
