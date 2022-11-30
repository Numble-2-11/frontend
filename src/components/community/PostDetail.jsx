import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from '../styled-component/ProfileImg';
import heartButton from '../../images/heart_button.svg';
import commentButton from '../../images/comment_button.svg';

const StyledDiv = styled.div`
	div {
		display: flex;
		align-items: center;
	}
	span {
		margin: 0 0 0 0.5rem;
	}
	p {
		text-align: left;
		font-size: 1.3rem;
	}
	input {
		background-color: transparent;
		border: none;
		outline: none;
		width: 100%;
	}
`;
export default function PostDetail({
	title,
	children,
	heart,
	comment,
	time,
	nickname,
	location,
}) {
	const DefaultImg =
		'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

	return (
		<StyledDiv
			children={children}
			heart={heart}
			comment={comment}
			time={time}
			nickname={nickname}
			location={location}
		>
			<h2 style={{ textAlign: 'left' }}>{title}</h2>
			<div style={{ paddingTop: '1rem' }}>
				<ProfileImg
					src={DefaultImg}
					style={{ width: '2rem', height: '2rem' }}
				/>
				<span>{nickname}</span>
				<span style={{ opacity: '70%' }}>{location}</span>
			</div>
			<p>{children}</p>
			<div
				style={{
					paddingBottom: '1rem',
					width: '100%',
					justifyContent: 'space-between',
				}}
			>
				<span style={{ opacity: '70%' }}>{time}시간 전</span>
				<div>
					<img src={heartButton} />
					<span>{heart}</span>
					<img src={commentButton} style={{ marginLeft: '1rem' }} />
					<span>{comment}</span>
				</div>
			</div>
		</StyledDiv>
	);
}
