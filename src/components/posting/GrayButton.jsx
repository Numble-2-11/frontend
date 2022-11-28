import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	cursor: pointer;
	${(props) => (props.dozen ? 'display: flex' : '')};
	${(props) => (props.dozen ? 'align-items:center' : '')};
	${(props) => (props.dozen ? 'span{ margin-left: 2rem}' : '')};
	border: 1px solid #fff;
	background: #272a33;
	color: #bfbfbf;
	opacity: 30%;
	padding: 0.9rem 1.4rem;
	height: 3.2rem;
	font-size: 1rem;
	border-radius: 1.6rem;
	margin: ${(props) => (props.margin ? props.margin : '0px 0.7rem 0.7rem 0px')};
	&:hover {
		color: #fff;
		opacity: 100%;
	}
	img {
	}
`;

export default function GrayButton({
	onClick,
	children,
	margin,
	style,
	dozen,
}) {
	return (
		<StyledButton
			onClick={onClick}
			type="submit"
			margin={margin}
			style={style}
			dozen={dozen}
		>
			{children}
		</StyledButton>
	);
}
