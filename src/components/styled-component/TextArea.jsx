import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
	border: none;
	outline: none;
	margin: 1rem 0;
	font-size: 1.6rem;
	color: #bfbfbf;
	width: 100%;
	background: #181924;

	&::placeholder {
		color: #fff;
		font-size: 1.6rem;
		opacity: 30%;
	}
`;

export default function TextArea({
	id,
	name,
	cols,
	rows,
	placeholder,
	isPost,
}) {
	return (
		<StyledTextarea
			id={id}
			name={name}
			cols={cols}
			rows={rows}
			placeholder={placeholder}
			isPost={isPost}
		/>
	);
}
