import React from "react";
import styled from "styled-components";

const StyleSpan = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  opacity: 0.7;
`;

export default function OutSpan({ children, style }) {
  return <StyleSpan style={style}>{children}</StyleSpan>;
}
