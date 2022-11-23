import React, { useState } from 'react';
import Header from '../components/Header';
import GrayButton from '../components/styled-component/GrayButton';
import Input from '../components/styled-component/Input';
import PostInput from '../components/styled-component/PostInput';
import TextArea from '../components/styled-component/TextArea';
import imgIcon from '../images/imgIcon.svg';

export default function PostWriting() {
	function onClickUpload() {
		let imageInput = document.getElementById('image-input');
		imageInput.click();
	}
	return (
		<>
			<Header>
				게시글 작성
				<GrayButton children={'저장'} margin={'0 0 0 4rem'} />
			</Header>
			<PostInput type="text" name="title" placeholder="제목" isTitle={true} />
			<TextArea
				id="contents"
				name="contents"
				placeholder="내용을 입력해주세요"
				rows="8"
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
			<div style={{ margin: '4rem 0 0 0 ', textAlign: 'left' }}>
				<GrayButton children={'새로생겼어요'} />
				<GrayButton children={'행사/축제'} />
				<GrayButton children={'세일/이벤트'} />
				<GrayButton children={'소모임'} />
				<GrayButton children={'잃어버렸어요'} />
				<GrayButton children={'자유게시판'} />
			</div>
			<label for="image-input">
				<GrayButton
					style={{
						width: '100%',
						marginTop: '2rem',
						height: '4.2rem',
						borderRadius: '2rem',
					}}
					dozen={true}
					onClick={onClickUpload}
				>
					<img src={imgIcon} /> <span>이미지를 추가해보세요</span>
				</GrayButton>
			</label>
			<Input
				id="image-input"
				type="file"
				style={{ display: 'none' }}
				accept="image/*"
			/>
		</>
	);
}
