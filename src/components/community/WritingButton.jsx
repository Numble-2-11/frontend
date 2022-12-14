import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import writing_button from '../../images/writing_button.svg';

const StyledDiv = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 7rem;
	right: calc(50vw - min(224px, 50vw) + 3rem);
	width: 4rem;
	height: 4rem;
	background-color: #2ad4af;
	border-radius: 50%;
	box-shadow: 2px 2px 5px black;
	img {
		width: 2.5rem;
		height: 2.5rem;
	}
`;

export default function WritingButton({}) {
	return (
		<StyledDiv>
			<Link to={'/postwriting'}>
				<img src={writing_button} />
			</Link>
		</StyledDiv>
	);
}
