import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import InterestPage from "./pages/InterestPage";
import Mypage from "./pages/Mypage";
import ProfilePage from "./pages/ProfilePage";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./components/styled-component/GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
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
