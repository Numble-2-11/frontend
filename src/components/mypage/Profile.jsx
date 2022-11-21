import React, { useState } from "react";
import ProfileBox from "./ProfileBox";
import OutSpan from "./OutSpan";
import Dialog from "./Dialog.jsx";

export default function Profile() {
  const [introduce, setIntroduce] = useState("한 줄 소개 부탁드려요 :)");
  const [location, setLocation] = useState("강남구 역삼 1동");
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const handleWithdraw = () => {
    setIsWithdraw(!isWithdraw);
  };
  const handleLogout = () => {
    setIsLogout(!isLogout);
  };

  return (
    <>
      <ProfileBox profileTitle={"내 소개"}>{introduce}</ProfileBox>
      <ProfileBox profileTitle={"내 위치 변경"}>
        현재 내 빌리지는 <br /> {location}
      </ProfileBox>
      <div style={{ display: "flex" }}>
        <OutSpan onClick={handleWithdraw} style={{ marginRight: "1rem" }}>
          탈퇴하기
        </OutSpan>
        <OutSpan onClick={handleLogout}>로그아웃</OutSpan>
      </div>
      {isWithdraw && (
        <Dialog
          title={"정말 탈퇴하시겠습니까?"}
          setIsWithdraw={setIsWithdraw}
        />
      )}
      {isLogout && (
        <Dialog title={"로그아웃 하시겠습니까?"} setIsLogout={setIsLogout} />
      )}
    </>
  );
}
