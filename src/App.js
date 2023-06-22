import React, { useContext, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { styled } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LoginPage from "./Pages/LoginPage";
import { AuthContext } from "./store/Context";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/firebase-config";
import CreatePage from "./Pages/CreatePage";
import ViewPost from "./Pages/ViewPost";
import Post from "./store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setUser(currentUser);
    });
  });
  return (
    <Container>
      <BrowserRouter>
        <Post>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/create" element={<CreatePage />} />
            <Route exact path="/view" element={<ViewPost />} />
          </Routes>
        </Post>
      </BrowserRouter>
    </Container>
  );
}

export default App;
const Container = styled.div``;
