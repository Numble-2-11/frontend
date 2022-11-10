import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin: 1rem 0;
  height: 3.3rem;
  color: #bfbfbf;
  background: #181924;
  border-bottom: ${(props) =>
    props.flag ? "2px solid white" : "2px solid #c7c7c7"};
  opacity: ${(props) => (props.flag ? "1" : "0.5")};

  &:focus {
    border-bottom: 2px solid white;
    opacitiy: 1;
  }
`;

export default function Input({ type, name, onChange, placeholder, value }) {
  return (
    <StyledInput
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      flag={value}
    />
  );
}
