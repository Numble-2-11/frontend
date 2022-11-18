import React from "react";
import styled from "styled-components";

const StyledList = styled.li`
  padding: 0.5rem 0 1rem 0;
  list-style: none;
  font-size: 1.2rem;
  width: ${(props) => (props.width ? props.width : "8rem")} 
  font-weight: bold;
  border-bottom: ${(props) =>
    props.isSelected ? "0.2rem solid #2AD4AF" : "0.2rem solid #fff"};
  opacity: ${(props) => (props.isSelected ? "1" : "0.5")};
  color: ${(props) => (props.isSelected ? "#2AD4AF" : "white")};
`;

export default function List({ isSelected, children, id, style }) {
  return (
    <StyledList isSelected={isSelected} id={id} style={style}>
      {children}
    </StyledList>
  );
}
