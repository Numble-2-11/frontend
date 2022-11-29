import React from 'react';
import styled from 'styled-components';

const StyledList = styled.li`
	padding: 0.5rem 0 1rem 0;
	list-style: none;
	font-size: 1.2rem;
	width: 8rem;
	font-weight: ${(props) => (props.isSelected ? 'bold' : '300')};
	border-bottom: ${(props) =>
		props.isSelected
			? '0.3rem solid #2AD4AF'
			: '0.2rem solid rgba(255, 255, 255, 0.3)'};
	opacity: ${(props) => (props.isSelected ? '1' : '0.3')};
	color: ${(props) => (props.isSelected ? '#2AD4AF' : 'white')};
`;

export default function List({ isSelected, children, id, style }) {
	return (
		<StyledList isSelected={isSelected} id={id} style={style}>
			{children}
		</StyledList>
	);
}
