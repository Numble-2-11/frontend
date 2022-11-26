import React from "react";
import { Link } from "react-router-dom";
import Friend from "./Friend";

export default function FriendList() {
  return (
    <>
      <Link to="/friendProfile">
        <Friend />
      </Link>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </>
  );
}
