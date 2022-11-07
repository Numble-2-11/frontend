import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Mypage from "./pages/Mypage";
import Profile from "./pages/Profile";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path=":id" element={<Mypage />} />
          </Route>
          <Route path="/profile" element={<Profile />}>
            <Route path=":id" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
