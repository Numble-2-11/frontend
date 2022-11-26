import React from "react";
import styled from "styled-components";

const EmailButton = styled.button`
  background: #9f9f9f;
  border-radius: 0.6rem;
  border: none;
  position: absolute;
  right: 0;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  padding: 0.3rem 0.6rem;
`;

export default function EmailConfirm() {
  return <EmailButton>인증번호</EmailButton>;
}
