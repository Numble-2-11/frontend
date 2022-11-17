import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin: 1rem 0;
  height: ${(props) => (props.isTitle ? '5rem' : '3.3rem')};
  font-size: ${(props) => (props.isTitle ? '2rem' : '1.6rem')};
  color: #bfbfbf;
  background: #181924;
  &:focus {  border-bottom: 2px solid white;  }
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #181924 inset;
    -webkit-text-fill-color: white;
  }
  &::placeholder {
    color: #FFF;
    font-size: ${(props) => (props.isTitle ? '2rem' : '1.6rem')};
    opacity: ${(props) => (props.isTitle ? '70%' : '30%')};
  }
`;

export default function PostInput({
	id,
	type,
	name,
	onChange,
	onClick,
	placeholder,
	value,
	style,
	isTitle,
}) {
	return (
		<StyledInput
			id={id}
			type={type}
			name={name}
			onChange={onChange}
			onClick={onClick}
			placeholder={placeholder}
			value={value}
			style={style}
			isTitle={isTitle}
		/>
	);
}
