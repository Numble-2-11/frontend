import React from "react";
import styled from "styled-components";

const StyleTtile = styled.span`
  font-size: 1.7rem;
  font-weight: 800;
`;

export default function Title({ children }) {
  return <StyleTtile>{children}</StyleTtile>;
}
