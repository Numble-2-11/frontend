import { Swiper } from "swiper/react";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export default function MainSwiper({ children }) {
  return <StyledSwiper children={children}></StyledSwiper>;
}
