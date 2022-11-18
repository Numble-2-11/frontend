import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/styled-component/GlobalStyled";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import InterestPage from "./pages/InterestPage";
import Mypage from "./pages/Mypage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage.jsx";
import Signup from "./components/Signup.jsx";
import Address from "./components/Address";
import CompletePage from "./pages/CompletePage";
import MainPage from "./pages/MainPage";
import CommunityPage from "./pages/CommunityPage";
import NewBoard from "./components/community/NewBoard";
import FestivalBoard from "./components/community/FestivalBoard";
import EventBoard from "./components/community/EventBoard";
import MeetingBoard from "./components/community/MeetingBoard";
import LoseBoard from "./components/community/LoseBoard";
import FreeBoard from "./components/community/FreeBoard";
import PostWriting from "./pages/PostWriting";
import Profile from "./components/mypage/Profile";
import Friends from "./components/mypage/Friends";
import Writing from "./components/mypage/Writing";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />}>
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
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="friendList" element={<Friends />} />
            <Route path="myWriting" element={<Writing />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />}>
            <Route path=":id" element={<ProfilePage />} />
          </Route>
          <Route path="/postwriting" element={<PostWriting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
