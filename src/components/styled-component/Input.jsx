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
    props.value ? "2px solid white" : "2px solid #737373"};
  &:focus {  border-bottom: 2px solid white;  }
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #181924 inset;
    -webkit-text-fill-color: white;
  }
`;

export default function Input({
  type,
  name,
  onChange,
  placeholder,
  value,
  style,
}) {
  return (
    <StyledInput
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={style}
    />
  );
}
