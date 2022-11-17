import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 9px 14px 9px 14px;
	width: 51px;
	height: 32px;
	font-size: 12px;
	border-radius: 16px;
	cursor: pointer;
	border: 1px solid #fff;
	background: #272a33;
	color: #bfbfbf;
	opacity: 30%;
	&:hover {
		color: #fff;
		opacity: 100%;
	}
`;

export default function GrayButton({ onClick, children, style }) {
	return (
		<StyledButton onClick={onClick} type="submit" style={style}>
			{children}
		</StyledButton>
	);
}
