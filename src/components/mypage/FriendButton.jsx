import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.7rem 3.5rem;
  border-radius: 0.3rem;
  color: ${(props) => (props.value ? "white" : "black")};
  background-color: ${(props) => (props.value ? "#272A33" : "#91f0c6")};
  transition: 0.2s;
  border: none;
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 3.5rem;
  cursor: pointer;
`;

export default function FriendButton({ onClick, value }) {
  return (
    <StyledButton onClick={onClick} value={value}>
      {value ? "친구취소" : "친구하기"}
    </StyledButton>
  );
}
