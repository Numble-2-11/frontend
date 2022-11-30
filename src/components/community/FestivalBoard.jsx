import React from 'react';
import Post from './Post';
import Location from './Location';
import WritingButton from './WritingButton';
import { Link } from 'react-router-dom';

export default function FestivalBoard() {
	return (
		<>
			<Location />
			<Post />
			<Post />
			<Link to={'/communityPost'}>
				<Post />
			</Link>
			<Post />
			<Post />
			<WritingButton />
		</>
	);
}
