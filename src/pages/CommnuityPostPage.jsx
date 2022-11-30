import React, { useState } from 'react';
import PostDetail from '../components/community/PostDetail';
import Header2 from '../components/Header2';
import GrayButton from '../components/posting/GrayButton';
import fileButton from '../images/file_button.svg';
import sendButton from '../images/send_button.svg';

export default function CommunityPostPage() {
	return (
		<>
			<Header2>커뮤니티</Header2>
			<PostDetail
				title={'안방에, 가벽을 세우려면 얼마나 들까요'}
				heart={5}
				comment={0}
				time={9}
				nickname={'김클린'}
				location={'역삼 1동'}
			>
				최근에 가족이 이사를 했는데 안방에 작업실을 같이 두고 싶어서 가벽을
				설치하려고 합니다. 그래서 잘 아시는 분 연락주세요!
			</PostDetail>
			<hr
				style={{
					border: '0',
					height: '0.1rem',
					backgroundColor: '#fff',
					transform: 'translateX(-24px)',
					width: '100vw',
					maxWidth: '448px',
					opacity: '30%',
				}}
			/>

			<GrayButton
				style={{
					width: 'calc(min(100vw, 448px) - 48px)',
					marginTop: '2rem',
					height: '4.2rem',
					borderRadius: '2rem',
					position: 'fixed',
					bottom: '3rem',
				}}
				dozen={true}
			>
				<img src={fileButton} />
				<input
					style={{
						backgroundColor: 'transparent',
						border: 'none',
						outline: 'none',
						width: '100%',
					}}
					type="text"
					placeholder="댓글을 입력해보세요."
				></input>
				<img src={sendButton} style={{ cursor: 'pointer' }} />
			</GrayButton>
		</>
	);
}
