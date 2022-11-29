import React from "react";
import { SignupDes } from "../components/signup/SignupDes";
import TextLogo from "../images/TextLogo.svg";
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
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../swiper.scss";

import background1 from "../images/swiper/background1.png";
import background2 from "../images/swiper/background2.png";
import background3 from "../images/swiper/background3.png";
import background4 from "../images/swiper/background4.png";
import background5 from "../images/swiper/background5.png";
import background6 from "../images/swiper/background6.png";

export default function Community() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={TextLogo} style={{ width: "9.8rem", height: "2.1rem" }} />
      </div>
      <SignupDes style={{ fontWeight: "bold", margin: "2.6rem 0 2rem 0" }}>
        안녕하세요! 콩나물님
        <br />
        우리 동네 와글에 참여해보아요!
      </SignupDes>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <img src={background1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background6} />
        </SwiperSlide>
      </Swiper>

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
        <div style={{ width: "40%", paddingLeft: "1.6rem" }}>
          <Link to={"/mypage/profile"}>
            <img src={myHome} />
          </Link>
        </div>
      </HomeSwitch>
    </>
  );
}
