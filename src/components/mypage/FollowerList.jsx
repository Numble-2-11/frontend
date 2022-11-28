import React from 'react';
import { Link } from 'react-router-dom';
import FollowSwitch from '../styled-component/FollowSwitch';
import Friend from './Friend';

export default function FollowerList() {
	return (
		<>
			<FollowSwitch direction={'left'} />
			<Link to="/friendProfile">
				<Friend />
			</Link>
			<Friend />
			<Friend />
			<Friend />
			<Friend />
		</>
	);
}
