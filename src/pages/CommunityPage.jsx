import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header2 from '../components/Header2';
import List from '../components/List.jsx';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';

export default function CommunityPage() {
	const [selected, setSelected] = useState(1);
	const location = useLocation();

	useEffect(() => {
		const splitUrl = location?.pathname?.split('/') ?? null;
		const location1 =
			splitUrl?.length > 1 ? splitUrl[splitUrl.length - 1] : null;
		if (location1 === 'newBoard') {
			setSelected(1);
		} else if (location1 === 'festivalBoard') {
			setSelected(2);
		} else if (location1 === 'eventBoard') {
			setSelected(3);
		} else if (location1 === 'meetingBoard') {
			setSelected(4);
		} else if (location1 === 'loseBoard') {
			setSelected(5);
		} else if (location1 === 'freeBoard') {
			setSelected(6);
		}
	}, [location]);
	const list = [
		{ text: '새로 생겼어요', url: 'newBoard', id: '1' },
		{ text: '행사/축제', url: 'festivalBoard', id: '2' },
		{ text: '고민상담', url: 'eventBoard', id: '3' },
		{ text: '소모임', url: 'meetingBoard', id: '4' },
		{ text: '잃어버렸어요', url: 'loseBoard', id: '5' },
		{ text: '자유게시판', url: 'freeBoard', id: '6' },
	];

	const handleClick = (e) => {
		if (e.target.outerText === '새로 생겼어요') {
			setSelected(1);
		} else if (e.target.outerText === '행사/축제') {
			setSelected(2);
		} else if (e.target.outerText === '고민상담') {
			setSelected(3);
		} else if (e.target.outerText === '소모임') {
			setSelected(4);
		} else if (e.target.outerText === '잃어버렸어요') {
			setSelected(5);
		} else if (e.target.outerText === '자유게시판') {
			setSelected(6);
		}
	};

	return (
		<>
			<Header2 children={'커뮤니티'} search={true} />
			<Container>
				<ScrollMenu wheel={true}>
					{list.map((item) => (
						<Link to={item.url} key={item.id} onClick={handleClick}>
							<List isSelected={selected == item.id}>{item.text}</List>
						</Link>
					))}
				</ScrollMenu>
			</Container>
			<Outlet />
		</>
	);
}

const Container = styled.div`
	overflow: hidden;
	.react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
		display: none;
	}
	.react-horizontal-scrolling-menu--scroll-container {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	width: 100vw;
	max-width: 448px;
	transform: translateX(-24px);
`;
