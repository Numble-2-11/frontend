import React from "react";
import { Link } from "react-router-dom";
import FollowSwitch from "../styled-component/FollowSwitch";
import Friend from "./Friend";

export default function FollowingList() {
  return (
    <>
      <FollowSwitch direction={"right"} />
      <Link to="/friendProfile">
        <Friend />
      </Link>
      <Link to="/friendProfile">
        <Friend />
      </Link>
      <Link to="/friendProfile">
        <Friend />
      </Link>
      <Link to="/friendProfile">
        <Friend />
      </Link>
      <Link to="/friendProfile">
        <Friend />
      </Link>
    </>
  );
}
