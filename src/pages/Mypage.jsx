import React from "react";
import { useParams } from "react-router-dom";

export default function Mypage() {
  const { id } = useParams();

  return <div>Mypage {id}</div>;
}
