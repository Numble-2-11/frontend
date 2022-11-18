import React, { useState } from "react";
import Button from "../components/styled-component/Button.jsx";
import { SignupDes } from "../components/signup/SignupDes";
import Input from "../components/styled-component/Input.jsx";
import profileBtn from "../images/profileBtn.svg";
import ProfileImg from "./../components/styled-component/ProfileImg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ProfileState } from "../states/UserState.jsx";

export default function CompletePage() {
  const DefaultImg =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const [profile, setProfile] = useRecoilState(ProfileState);
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleFileOnChange = (e) => {
    if (e.target.files[0]) {
      setProfile(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setProfile(DefaultImg);
      return;
    }
    // 화면에 프로필 표시
    const reader = new FileReader();
    reader.onload = (e) => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname === "") {
      alert("닉네임을 입력해주세요.");
    } else {
      alert("회원가입이 완료되었습니다.");
      axios
        .post("", {
          profile: profile,
          nickname: nickname,
        })
        .then((res) => {
          console.log(res);
          navigate("/main");
        })
        .catch((err) => {
          console.log(err);
          navigate("/main"); // 임시로 메인으로 가게 만듦
        });
    }
  };

  return (
    <>
      <SignupDes margin={"5rem 0"}>
        안녕하세요 콩나물님 <br /> 와글와글 빌리지에 오신걸 <br /> 환영합니다.
      </SignupDes>
      <SignupDes
        margin={"3rem 0 1.2rem 0"}
        fontSize={"1.3rem"}
        textAlign={"center"}
      >
        프로필을 꾸며보세요
      </SignupDes>
      <ProfileImg src={profile} style={{ transform: "translateX(1.5rem)" }} />
      <label for="file-input">
        <img
          src={profileBtn}
          style={{ transform: "translateX(-2rem)", cursor: "pointer" }}
        />
      </label>

      <Input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        name="profileImage"
        onChange={handleFileOnChange}
      />
      <Input
        type="text"
        placeholder="닉네임 입력"
        onChange={handleChange}
        value={nickname}
        name="nickname"
      />
      <Button possible={true} children={"다음에"} onClick={handleSubmit} />
      <div>프로필은 마이페이지에서도 수정이 가능합니다!</div>
    </>
  );
}
