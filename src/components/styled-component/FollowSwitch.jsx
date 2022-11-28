import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSwitch = styled.div`
	display: flex;
	width: 13rem;
	height: 3.5rem;
	margin: 0 auto;
	margin-bottom: 1.4rem;
	align-items: center;
	justify-content: space-between;
	border-radius: 2rem;
	background-color: #272a33;
	padding: 0.3rem;
	div {
		width: 100%;
		height: 100%;
		border-radius: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		span {
			font-weight: bold;
		}
	}
`;

export default function FollowSwitch({ children, direction }) {
	return (
		<StyledSwitch children={children} direction={direction}>
			<div
				style={{
					backgroundColor: direction == 'left' ? '#fff' : '',
				}}
			>
				<Link to={'/mypage/followerList'}>
					<span style={{ color: direction == 'left' ? '#181924' : '' }}>
						팔로워
					</span>
				</Link>
			</div>
			<div
				style={{
					backgroundColor: direction == 'right' ? '#fff' : '',
				}}
			>
				<Link to={'/mypage/followingList'}>
					<span style={{ color: direction == 'right' ? '#181924' : '' }}>
						팔로잉
					</span>
				</Link>
			</div>
		</StyledSwitch>
	);
}
