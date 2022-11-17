import React from 'react';
import Header from '../components/Header';
import GrayButton from '../components/styled-component/GrayButton';
import PostInput from '../components/styled-component/PostInput';
import TextArea from '../components/styled-component/TextArea';

export default function PostWriting() {
	return (
		<>
			<Header children={'게시글 작성'} />
			<GrayButton
				children={'저장'}
				style={{
					padding: '0.9rem 1.4rem',
					width: '5.1rem',
					height: '3.2rem',
					fontSize: '1.2rem',
					borderRadius: '1.6rem',
				}}
			/>
			<PostInput type="text" name="title" placeholder="제목" isTitle={true} />
			<TextArea
				id="contents"
				name="contents"
				placeholder="내용을 입력해주세요"
				rows="5"
				cols="33"
			></TextArea>
			<PostInput
				type="text"
				name="storeName"
				placeholder="가게 이름"
				isTitle={false}
			/>
			<br></br>
			<PostInput type="text" name="dong" placeholder="행정동" isTitle={false} />
		</>
	);
}
