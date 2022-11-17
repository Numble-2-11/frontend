import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import InterestPage from "./pages/InterestPage";
import Mypage from "./pages/Mypage";
import ProfilePage from "./pages/ProfilePage";
import { GlobalStyle } from "./components/styled-component/GlobalStyled";
import SignupPage from "./pages/SignupPage.jsx";
import Signup from "./components/Signup.jsx";
import Address from "./components/Address";
import CompletePage from "./pages/CompletePage";
import MainPage from "./pages/MainPage";
import CommunityPage from "./pages/CommunityPage";

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
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path=":id" element={<Mypage />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />}>
            <Route path=":id" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
