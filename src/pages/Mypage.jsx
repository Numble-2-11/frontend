import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header2 from '../components/Header2.jsx';
import List from '../components/List.jsx';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import ProfileImg from '../components/styled-component/ProfileImg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NameState, ProfileState } from './../states/UserState';
import HomeSwitch from '../components/styled-component/HomeSwitch.jsx';
import waggleHome from '../images/waggleHome2.svg';
import myHome from '../images/myHome2.svg';

export default function Mypage() {
	const { id } = useParams();
	const [selected, setSelected] = useState(1);
	const [profile, setProfile] = useRecoilState(ProfileState);
	const name = useRecoilValue(NameState);

	const list = [
		{ text: '프로필', url: 'profile', id: '1' },
		{ text: '친구 목록', url: 'followerList', id: '2' },
		{ text: '내가 쓴 글', url: 'myWriting', id: '3' },
	];

	const handleClick = (e) => {
		if (e.target.outerText === '프로필') {
			setSelected(1);
		} else if (e.target.outerText === '친구 목록') {
			setSelected(2);
		} else if (e.target.outerText === '내가 쓴 글') {
			setSelected(3);
		}
	};

	return (
		<>
			<Header2 children={'마이페이지'} />
			<ProfileImg src={profile} style={{ width: '6.4rem', height: '6.4rem' }} />
			<div style={{ margin: '1.5rem 0' }}>{name}님</div>
			<Container>
				{list.map((item) => (
					<Link
						to={item.url}
						key={item.id}
						onClick={handleClick}
						style={{ display: 'flex', width: '100%' }}
					>
						<List isSelected={selected == item.id} style={{ flex: 1 }}>
							{item.text}
						</List>
					</Link>
				))}
			</Container>
			<Outlet />

			<HomeSwitch direction={'right'}>
				<div style={{ width: '40%', paddingRight: '1.5rem' }}>
					<Link to={'/main'}>
						<img src={waggleHome} />
					</Link>
				</div>
				<div
					style={{
						width: '60%',
						backgroundColor: '#2AD4AF',
					}}
				>
					<span style={{ color: 'black', fontWeight: '550' }}>마이 홈</span>
					<img src={myHome} />
				</div>
			</HomeSwitch>
		</>
	);
}

const Container = styled.div`
	display: flex;
	margin-bottom: 1rem;
	width: 100vw;
	max-width: 448px;
	transform: translateX(-24px);
`;
