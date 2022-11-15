import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 17rem;
  width: 17rem;
  border-radius: 50%;
  object-fit: cover;
`;

export default function Img({ src }) {
  return <StyledImg src={src} />;
}
