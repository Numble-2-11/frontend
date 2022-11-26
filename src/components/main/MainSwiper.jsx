import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 28rem;
  box-sizing: border-box;
  background-color: white;
  position: relative;
  padding: 10px;
  margin-bottom: 1.8rem;
  swiper-slide {
    background-color: black;
    width: 20px;
    .box {
      display: flex;
      flex-wrap: wrap;
      .content {
        margin: auto;
        line-height: 1.4em;
        font-size: 18px;
        li {
          margin: auto;
        }
      }
    }
    border: 5px solid #fff5ee;
  }
`;

export default function MainSwiper({ children }) {
  return <StyledSwiper children={children}></StyledSwiper>;
}
