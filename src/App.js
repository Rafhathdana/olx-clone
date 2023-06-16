import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { styled } from "styled-components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
const Container = styled.div``;
