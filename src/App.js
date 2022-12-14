import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/styled-component/GlobalStyled';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import Mypage from './pages/Mypage';
import SignupPage from './pages/SignupPage.jsx';
import Signup from './components/signup/Signup.jsx';
import Address from './components/signup/Address';
import CompletePage from './pages/CompletePage';
import MainPage from './pages/MainPage';
import CommunityPage from './pages/CommunityPage';
import NewBoard from './components/community/NewBoard';
import FestivalBoard from './components/community/FestivalBoard';
import EventBoard from './components/community/EventBoard';
import MeetingBoard from './components/community/MeetingBoard';
import LoseBoard from './components/community/LoseBoard';
import FreeBoard from './components/community/FreeBoard';
import PostWriting from './pages/PostWriting';
import Profile from './components/mypage/Profile';
import Writing from './components/mypage/Writing';
import FriendProfilePage from './pages/FriendProfilePage';
import { useSetRecoilState } from 'recoil';
import { LoginState } from './states/LoginState.jsx';
import { refreshToken } from './components/login/utils';
import FollowerList from './components/mypage/FollowerList';
import FollowingList from './components/mypage/FollowingList';
import CommunityPostPage from './pages/CommnuityPostPage';

function App() {
	const setIsLogin = useSetRecoilState(LoginState);

	useEffect(() => {
		try {
			refreshToken(loginCallback);
		} catch (e) {
			console.log('app silent requset fail : ' + e);
		}
	}, []);

	function loginCallback(login) {
		setIsLogin(login);
	}

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/user/login" element={<LoginPage />} />
					<Route path="/user/signup" element={<SignupPage />}>
						<Route path="signup" element={<Signup />} />
						<Route path="address" element={<Address />} />
					</Route>
					<Route path="/complete" element={<CompletePage />} />
					<Route path="/main" element={<MainPage />} />
					<Route path="/community" element={<CommunityPage />}>
						<Route path="newBoard" element={<NewBoard />} />
						<Route path="festivalBoard" element={<FestivalBoard />} />
						<Route path="eventBoard" element={<EventBoard />} />
						<Route path="meetingBoard" element={<MeetingBoard />} />
						<Route path="loseBoard" element={<LoseBoard />} />
						<Route path="freeBoard" element={<FreeBoard />} />
					</Route>
					<Route path="/communityPost" element={<CommunityPostPage />} />
					<Route path="/postwriting" element={<PostWriting />} />
					<Route path="/mypage" element={<Mypage />}>
						<Route path="profile" element={<Profile />} />
						<Route path="followerList" element={<FollowerList />} />
						<Route path="followingList" element={<FollowingList />} />
						<Route path="myWriting" element={<Writing />} />
					</Route>
					<Route path="/friendProfile" element={<FriendProfilePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
