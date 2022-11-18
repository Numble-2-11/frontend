import React, { useState } from "react";
import ProfileBox from "./ProfileBox";

export default function Profile() {
  const [introduce, setIntroduce] = useState("한 줄 소개 부탁드려요 :)");
  const [location, setLocation] = useState("강남구 역삼 1동");

  return (
    <>
      <ProfileBox profileTitle={"내 소개"}>{introduce}</ProfileBox>
      <ProfileBox profileTitle={"내 위치 변경"}>
        현재 내 빌리지는 <br /> {location}
      </ProfileBox>
    </>
  );
}
