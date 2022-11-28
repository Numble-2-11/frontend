import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1.25rem 0;
  width: 100%;
  border-radius: 6px;
  border: none;
  margin: 1rem 0;
  cursor: pointer;
  background: ${(props) => (props.possible ? "#91f0c6" : "#272A33")};
  color: ${(props) => (props.possible ? "#181924" : "#bfbfbf")};
`;

export default function Button({
  onClick,
  children,
  possible,
  disabled,
  style,
}) {
  return (
    <StyledButton
      onClick={onClick}
      type="submit"
      possible={possible}
      disabled={disabled}
      style={style}
    >
      {children}
    </StyledButton>
  );
}
