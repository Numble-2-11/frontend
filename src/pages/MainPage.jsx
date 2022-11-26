import React from "react";
import { SignupDes } from "../components/signup/SignupDes";
import { ReactComponent as TextLogo } from "../images/TextLogo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import MainSwiper from "../components/main/MainSwiper";
import newIcon from "../images/new.svg";
import festival from "../images/festival.svg";
import consult from "../images/consult.svg";
import smallGroup from "../images/small_group.svg";
import lost from "../images/lost.svg";
import free from "../images/free.svg";
import waggleHome from "../images/waggleHome.svg";
import myHome from "../images/myHome.svg";
import MainDiv from "../components/main/MainDiv";
import { Link } from "react-router-dom";
import HomeSwitch from "../components/styled-component/HomeSwitch";

SwiperCore.use([Pagination, Autoplay]);

export default function Community() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextLogo style={{ width: "9.8rem", height: "2.1rem" }} />
      </div>
      <SignupDes style={{ fontWeight: "bold", margin: "2.6rem 0 2rem 0" }}>
        안녕하세요! 콩나물님
        <br />
        우리 동네 와글에 참여해보아요!
      </SignupDes>
      {/* <MainSwiper
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        <SwiperSlide>
          <div className="box">슬라이드1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">슬라이드2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">슬라이드3</div>
        </SwiperSlide>
      </MainSwiper> */}
      <MainDiv>
        <Link to="/community/newBoard">
          <img src={newIcon} />
          <span>새로 생겼어요</span>
        </Link>
        <Link to="/community/festivalBoard">
          <img src={festival} />
          <span>행사/축제</span>
        </Link>
        <Link to="/community/eventBoard">
          <img src={consult} />
          <span>고민상담</span>
        </Link>
        <Link to="/community/meetingBoard">
          <img src={smallGroup} />
          <span>소모임</span>
        </Link>
        <Link to="/community/loseBoard">
          <img src={lost} />
          <span>잃어버렸어요</span>
        </Link>
        <Link to="/community/freeBoard">
          <img src={free} />
          <span>자유게시판</span>
        </Link>
      </MainDiv>
      <HomeSwitch direction={"left"}>
        <div style={{ width: "60%", backgroundColor: "#2AD4AF" }}>
          <img src={waggleHome} />
          <span style={{ color: "black", fontWeight: "550" }}>와글 홈</span>
        </div>
        <div style={{ width: "40%" }}>
          <Link to={"/mypage/profile"}>
            <img src={myHome} />
          </Link>
        </div>
      </HomeSwitch>
    </>
  );
}
