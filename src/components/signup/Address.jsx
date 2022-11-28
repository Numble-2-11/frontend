import React, { useState, useEffect } from 'react';
import Button from '../styled-component/Button.jsx';
import { SignupDes } from './SignupDes.jsx';
import Postcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../styled-component/Input.jsx';

export default function Address() {
	const [address, setAddress] = useState('');
	const [possible, setPossible] = useState(false);
	const [openPostcode, setOpenPostcode] = useState(false);
	const navigate = useNavigate();

	const selectAddress = (data) => {
		setAddress(data.sido + ' ' + data.sigungu + ' ' + data.bname);
		setOpenPostcode(false);
	};

	const clickButton = () => {
		setOpenPostcode(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!address) {
			return alert('주소를 입력해주세요.');
		} else {
			axios
				.post('', {
					address: address,
				})
				.then((res) => {
					console.log(res.data);
					if (res.data === 'success') {
						alert('주소가 등록되었습니다.');
						navigate('/complete');
					}
				})
				.catch((err) => {
					console.log(err);
					navigate('/complete'); // 임시로 메인으로 가게 함
				});
		}
	};
	useEffect(() => {
		if (address) {
			setPossible(true);
		} else if (!address) {
			setPossible(false);
		}
	}, [address]);

	return (
		<>
			<SignupDes>주소를 입력해주세요</SignupDes>
			{openPostcode && (
				<Postcode
					autoClose={false}
					onComplete={selectAddress}
					style={{ width: '100%', height: '35rem' }}
				/>
			)}
			<Input id="addressInput" onClick={clickButton} value={address} />
			<Button onClick={handleSubmit} children={'완료'} possible={possible} />
		</>
	);
}
