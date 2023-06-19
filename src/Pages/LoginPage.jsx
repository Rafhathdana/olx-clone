import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/olx-logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function LoginPage() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async () => {
    try {
      const { email, password } = formValue;
      alert(email + password);
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Container>
      <LoginParentDiv>
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formValue.email}
          onChange={(e) => {
            setFormValue({ ...formValue, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          value={formValue.password}
          onChange={(e) => {
            setFormValue({ ...formValue, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <br />
        <button onClick={handleSignIn}>Sign In</button>
        <SignupLink onClick={() => navigate("/signup")}>Signup</SignupLink>
      </LoginParentDiv>
    </Container>
  );
}

export default LoginPage;
const Container = styled.div``;

const LoginParentDiv = styled.div`
  border: 1px solid black;
  width: max-content;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  input {
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    outline-color: transparent;
  }
  button {
    width: 100%;
    height: 48px;
    background-color: #002f34;
    color: whitesmoke;
    font-weight: 900;

    &:hover {
      background-color: white;
      color: #002f34;
      border: 2px solid #002f34;
    }
  }
`;

const SignupLink = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
