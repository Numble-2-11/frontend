import React from "react";
import styled from "styled-components";

const StyledTitle = styled.span`
  font-size: 1.7rem;
  font-weight: 800;
  text-align: left;
  margin: 3rem 0 3rem 1rem;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
