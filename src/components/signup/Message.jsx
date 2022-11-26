import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: #ff6a6a;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: left;
  margin-bottom: 1rem;
`;

export default function Message({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
